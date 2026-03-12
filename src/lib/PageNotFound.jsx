import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Compass, AlertTriangle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1) || "unknown-route";

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-xl w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-8"
                >
                    {/* Visual Header */}
                    <div className="relative">
                        <span className="text-[12rem] font-black text-slate-200/60 leading-none select-none">
                            404
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                            >
                                <Compass className="w-20 h-20 text-teal-800" strokeWidth={1.5} />
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* Messaging */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Lost in Transit?
                        </h2>
                        <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
                            We couldn't find a logistics route for <span className="font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">/{pageName}</span>. 
                        </p>
                    </div>

                    {/* Simple "Local" Admin Hint (No Auth Required) */}
                    {process.env.NODE_ENV === 'development' && (
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left flex gap-4">
                            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-semibold text-amber-800">Development Note</p>
                                <p className="text-sm text-amber-700">
                                    This route is defined in the URL but not mapped in your <code className="bg-amber-100 px-1 rounded">pages.config.js</code>.
                                </p>
                            </div>
                        </div>
                    )}
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link 
                            to="/" 
                            className="flex items-center gap-2 px-8 py-3 bg-teal-800 text-white font-semibold rounded-full hover:bg-teal-900 transition-all shadow-lg shadow-teal-900/20 w-full sm:w-auto justify-center"
                        >
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Link>
                        
                        <button 
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-8 py-3 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all w-full sm:w-auto justify-center"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Previous Page
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}