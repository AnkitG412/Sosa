
import React, { useState, useRef } from 'react';
import { X, Star, Loader2, CheckCircle, Image as ImageIcon, Trash2 } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Limit file size to avoid LocalStorage issues (max 2MB for this demo)
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size is too large. Please select an image under 2MB.");
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    
    setIsSubmitting(true);
    
    try {
        // 1. Prepare data for Local Display (Website)
        let imageBase64 = '';
        if (selectedFile) {
            try {
                imageBase64 = await convertToBase64(selectedFile);
            } catch (err) {
                console.error("Image conversion failed", err);
            }
        }

        const newReview = {
            id: Date.now().toString(),
            name: name || "Recent Traveler",
            location: "Visitor",
            designation: profession || "Traveler",
            quote: message || "Rated highly!",
            rating: rating,
            imageUrl: imageBase64, // Store Base64 for local display
            date: new Date().toISOString()
        };

        // Save to LocalStorage so it appears on the site immediately
        const existingReviews = JSON.parse(localStorage.getItem('sosa_user_reviews') || '[]');
        const updatedReviews = [newReview, ...existingReviews];
        localStorage.setItem('sosa_user_reviews', JSON.stringify(updatedReviews));

        // Dispatch event so Home page updates without reload
        window.dispatchEvent(new Event('review-added'));

        // 2. Attempt to send email (Best Effort - Don't block UI if this fails)
        const FORMSPREE_ID = 'xkogvloe'; 
        const formData = new FormData();
        formData.append('name', name);
        formData.append('profession', profession);
        formData.append('message', `Rating: ${rating} Stars\nMessage: ${message}`);
        formData.append('_subject', `New Website Feedback (${rating} Stars)`);
        
        // We use a short timeout for the API call so the user doesn't wait too long
        const apiCall = fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        });

        // Race between API call and a 2-second timer to ensure loader stops
        await Promise.race([
            apiCall,
            new Promise(resolve => setTimeout(resolve, 2000))
        ]);
        
        setIsSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 2500);

    } catch (error) {
        console.error("Feedback error:", error);
        // Even if API fails, we saved locally, so show success
        setIsSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 2500);
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleClose = () => {
      onClose();
      // Reset after animation
      setTimeout(() => {
        setIsSubmitted(false);
        setRating(0);
        setMessage('');
        setName('');
        setProfession('');
        setSelectedFile(null);
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
        setHoverRating(0);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      ></div>
      
      {/* Modal */}
      <div className="bg-white rounded-[12px] shadow-2xl w-full max-w-sm relative z-10 overflow-hidden animate-reveal-up max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
             <div className="p-12 flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                    <CheckCircle size={32} />
                 </div>
                 <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2">Thank You</h3>
                 <p className="text-gray-600 text-sm">Your feedback is live!</p>
             </div>
        ) : (
            <>
                <div className="bg-primary-900 p-5 flex justify-between items-center text-white border-b border-white/10">
                    <h3 className="font-serif font-bold text-lg tracking-wide">Rate Your Experience</h3>
                    <button onClick={handleClose} className="hover:text-gold-500 transition-colors bg-white/10 p-1 rounded-full"><X size={18} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-8">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest text-center mb-6">How was your visit today?</p>
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-3 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setRating(star)}
                                className="focus:outline-none transition-all duration-200 hover:scale-110 active:scale-95"
                            >
                                <Star 
                                    size={36} 
                                    fill={(hoverRating || rating) >= star ? "#c5a028" : "transparent"} 
                                    className={(hoverRating || rating) >= star ? "text-gold-500 drop-shadow-sm" : "text-gray-300"}
                                    strokeWidth={1.5}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Name & Profession Inputs */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                            <input 
                                type="text"
                                className="w-full bg-cream border border-gray-200 rounded-[6px] p-3 focus:outline-none focus:border-gold-500 transition-colors text-sm text-primary-900 placeholder-gray-400"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Profession</label>
                            <input 
                                type="text"
                                className="w-full bg-cream border border-gray-200 rounded-[6px] p-3 focus:outline-none focus:border-gold-500 transition-colors text-sm text-primary-900 placeholder-gray-400"
                                placeholder="Traveler / CEO"
                                value={profession}
                                onChange={(e) => setProfession(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Anything else to add? (Optional)</label>
                        <textarea 
                            className="w-full bg-cream border border-gray-200 rounded-[6px] p-3 focus:outline-none focus:border-gold-500 transition-colors resize-none text-sm text-primary-900 placeholder-gray-400"
                            rows={3}
                            placeholder="Share your thoughts..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div className="mb-6">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Add a Photo (Optional)</label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleFileChange} 
                            ref={fileInputRef}
                            className="hidden" 
                        />
                        
                        {!selectedFile ? (
                            <button 
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full border-2 border-dashed border-gray-200 rounded-[6px] p-4 flex flex-col items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-colors gap-2"
                            >
                                <ImageIcon size={24} />
                                <span className="text-xs uppercase tracking-wider font-bold">Upload Image</span>
                            </button>
                        ) : (
                            <div className="relative rounded-[6px] overflow-hidden border border-gray-200 bg-gray-50 p-2 flex items-center gap-3">
                                {previewUrl && (
                                    <div className="w-12 h-12 flex-shrink-0 rounded bg-gray-200 overflow-hidden">
                                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className="flex-grow min-w-0">
                                    <p className="text-xs font-bold text-primary-900 truncate">{selectedFile.name}</p>
                                    <p className="text-[10px] text-gray-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                                </div>
                                <button 
                                    type="button" 
                                    onClick={removeFile}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Disclaimer */}
                    <p className="text-[10px] text-gray-400 text-center mb-6 leading-relaxed italic">
                        By submitting, you agree that your feedback and image may be featured on the SOSA Travelz website to inspire other travelers.
                    </p>

                    <button 
                        type="submit" 
                        disabled={rating === 0 || isSubmitting}
                        className="w-full bg-gold-500 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-[6px] hover:bg-gold-600 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                        {isSubmitting ? <><Loader2 className="animate-spin" size={16} /> Saving...</> : 'Send Feedback'}
                    </button>
                </form>
            </>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
