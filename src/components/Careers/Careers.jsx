import React from 'react';
import './Careers.css';

const Careers = () => {
  const careersList = [
    {
      id: 1,
      title: "Sports Data Scientist",
      skills: "Python, R, Machine Learning, Tableau",
      icons: ["Py", "R", "ML"]
    },
    {
      id: 2,
      title: "Wearable Tech Engineer",
      skills: "Embedded C, IoT, Sensor Fusion, PCB Design",
      icons: ["C", "IoT", "PCB"]
    },
    {
      id: 3,
      title: "Biomechanics Analyst",
      skills: "MATLAB, OpenCV, Kinesiology, Tensorflow",
      icons: ["MAT", "CV", "TF"]
    },
    {
      id: 4,
      title: "VR/AI Training Developer",
      skills: "Unity, C#, AI Prompting, 3D Modeling",
      icons: ["Un", "C#", "AI"]
    },
    {
      id: 5,
      title: "Esports System Architect",
      skills: "AWS, NodeJs, WebRTC, K8s",
      icons: ["AWS", "Node", "K8s"]
    },
    {
      id: 6,
      title: "Smart Stadium Network Engineer",
      skills: "5G, Cisco, Cybersecurity, Edge Computing",
      icons: ["5G", "Cis", "Sec"]
    }
  ];

  return (
    <div className="careers-container">
      <div className="careers-header">
        <h2 className="careers-title">Careers</h2>
      </div>
      
      <div className="careers-grid">
        {careersList.map((job) => (
          <div className="career-card" key={job.id}>
            <div className="career-icons">
              {job.icons.map((icon, index) => (
                <div 
                  className="career-icon" 
                  key={index} 
                  style={{ zIndex: 10 - index }}
                >
                  {icon}
                </div>
              ))}
            </div>
            
            <h3 className="career-job-title">{job.title}</h3>
            <p className="career-skills"><strong>Skill:</strong> {job.skills}</p>
            
            <div className="career-apply">
              <button className="apply-btn">APPLY</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
