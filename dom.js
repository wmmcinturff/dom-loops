"use strict";

const dinosaurs = [
    {
      dinoType: 't-rex',
      name: 'wrex',
    },
    {
      dinoType: 'stegosaurus',
      name: 'steve',
    },
    {
      dinoType: 'velociraptor',
      name: 'Ted',
    }
  ];
  const assignments = [
    {
      title: 'product cards',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    },
    {
      title: 'product cards2',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    },
    {
      title: 'product cards3',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    },
    {
      title: 'product cards4',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    },
    {
      title: 'product cards5',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    }
  ];

  const buildDinosaurs =() => {
      let domString = '';

      for (let i =0;  i < assignments.length; i++) {
          domString += '<div class="dinosaur">'
          domString +=  '<h3>${dinosaurs[i].dinoType}</h3>'
          domString +=  '<p>${dinosaurs[i].name</p>'
          domString += '</div>'
      }
  }
  
  buildDinosaurs('')