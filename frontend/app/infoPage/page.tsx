import React from 'react';

function InfoPage() {
  return (
    <div className=" min-h-screen flex items-center justify-center text-white">
      <div className="max-w-2xl mx-auto p-10 rounded-lg shadow-md ">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to SkillSync</h1>
        <p className="text-lg text-center mb-8">The best place to organize and search your personal PDF documents</p>
        <div className="flex justify-center mb-8">
            <img src="/images/icon_skill.png" alt="SkillSync Logo" className="h-16 w-16 mr-4" />
            <img src="/images/add_pdf.png" alt="SkillSync Logo" className="h-16 w-16 mr-4" />
        </div>
        <p className="text-lg text-center mb-8">SkillSync is a powerful AI tool that helps you organize and search through your PDF documents with ease.</p>
        
      </div>
    </div>
  );
}

export default InfoPage;
