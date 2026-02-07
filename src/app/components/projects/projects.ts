import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with Angular and Node.js',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      demoUrl: 'https://demo-url.com',
      codeUrl: 'https://github.com/your-username/project1'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates',
      image: 'assets/project2.jpg',
      technologies: ['Angular', 'Firebase', 'Bootstrap'],
      demoUrl: 'https://demo-url.com',
      codeUrl: 'https://github.com/your-username/project2'
    }
    // Add more projects
  ];
}
