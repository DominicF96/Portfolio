import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const Knowledge = () => {

  const primary_color = "#20f888";
  const secondary_color = "#1400cc";

  const languages_data = [
    { subject: 'TypeScript', A: 65, fullMark: 100 },
    { subject: 'SQL', A: 60, fullMark: 100 },
    { subject: 'Python', A: 50, fullMark: 100 },
    { subject: 'JavaScript', A: 95, fullMark: 100 },
    { subject: 'Java', A: 70, fullMark: 100 },
    { subject: 'C#', A: 80, fullMark: 100 },
    { subject: 'C', A: 35, fullMark: 100 }
  ];

  const frameworks_data = [
    { subject: 'Angular 4', A: 50, fullMark: 100 },
    { subject: 'NextJS', A: 55, fullMark: 100 },
    { subject: 'ExpressJS', A: 80, fullMark: 100 },
    { subject: 'NodeJS', A: 75, fullMark: 100 },
    { subject: 'React', A: 95, fullMark: 100 },
    { subject: 'Android', A: 35, fullMark: 100 }
  ];

  const software_data = [
    // { subject: 'Atlassian Suite', A: 85, fullMark: 100 },
    { subject: 'Suite Atlassian', A: 85, fullMark: 100 },
    { subject: 'Blender', A: 55, fullMark: 100 },
    { subject: 'Unity 3D', A: 80, fullMark: 100 },
    { subject: 'Office', A: 90, fullMark: 100 },
    { subject: 'Photoshop', A: 60, fullMark: 100 },
    { subject: 'Sony Vegas', A: 60, fullMark: 100 },
    { subject: 'VS Code', A: 95, fullMark: 100 }
  ];

  const other_data = [
    { subject: 'Agile', A: 95, fullMark: 100 },
    { subject: 'GIT', A: 80, fullMark: 100 },
    { subject: 'OOP', A: 75, fullMark: 100 },
    { subject: 'Data Structure', A: 85, fullMark: 100 },
    { subject: 'Algorithm', A: 80, fullMark: 100 },
  ];

  return (
    <>
      <section id="knowledge">
        <div className="row">
          <div className="col">
            {/* <h3>Programming &amp; Query Languages</h3> */}
            <h3>Langages de programmation de reqûetes</h3>
            <RadarChart cx={150} cy={115} outerRadius={75} width={300} height={230} data={languages_data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="languages" dataKey="A" stroke={primary_color} fill={primary_color} fillOpacity={0.6} />
            </RadarChart>
          </div>
          <div className="col">
            {/* <h3>Frameworks</h3> */}
            <h3>Cadriciels</h3>
            <RadarChart cx={150} cy={115} outerRadius={75} width={300} height={230} data={frameworks_data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="languages" dataKey="A" stroke={primary_color} fill={primary_color} fillOpacity={0.6} />
            </RadarChart>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <h3>Software</h3> */}
            <h3>Logiciels</h3>
            <RadarChart cx={169} cy={115} outerRadius={75} width={300} height={230} data={software_data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="languages" dataKey="A" stroke={primary_color} fill={primary_color} fillOpacity={0.6} />
            </RadarChart>
          </div>
          <div className="col">
            {/* <h3>Other</h3> */}
            <h3>Autres</h3>
            <RadarChart cx={150} cy={115} outerRadius={65} width={300} height={230} data={other_data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="languages" dataKey="A" stroke={primary_color} fill={primary_color} fillOpacity={0.6} />
            </RadarChart>
          </div>
        </div>
      </section>
    </>
  );
}

export default Knowledge;