import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgTerminal } from 'ng-terminal';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild('term', { static: false })
  child!: NgTerminal;
  prompt: string = '';

  ngAfterViewInit() {
    // Initial terminal prompt
    this.child.write('Hi there!\r\n\r\n');
    this.child.write('\r\nWelcome to my Terminal Portfolio! This project showcases my skills, education, projects and experience in a unique terminal-style interface.\r\n\r\n');

    this.child.write('\x1b[31m'+' ____       _            '+ '\r\n');
    this.child.write('||   \\\\    /_\\    ||   ||'+ '\r\n');
    this.child.write('||   //   // \\\\   ||   ||'+ '\r\n');
    this.child.write('||===|   ||===||  ||===||'+ '\r\n');
    this.child.write('||   \\\\  ||   ||  ||   ||'+ '\r\n');
    this.child.write('||___//  ||   ||  ||   ||'+ '\x1b[0m'+'\r\n');
    this.child.write('\r\n\r\nEnter \'help\' to get started!\r\n');
    this.child.write('\r\n\r\n\r\n===========================================\r\n\r\n');
    this.child.write('\x1b[32m' + 'root@AhmedHoussamBouzine:~# ' + '\x1b[0m');

    // Subscribe to user input
    this.child.onData().subscribe((input) => {
      this.processInput(input);
    });
  }

  private processInput(input: string) {
    if (input === '\r') { // Carriage Return (When Enter is pressed)
      this.handleCommand();
    } else if (input === '\u007f') { // Delete (When Backspace is pressed)
      this.handleBackspace();
    } else if (input === '\u0003') { // End of Text (When Ctrl and C are pressed)
      this.handleCtrlC();
    } else {
      // Regular character input
      this.prompt += input;
      this.child.write(input);
    }
  }

  private handleCommand() {
    const command = this.prompt.trim();

    if (command === 'clear') {
      this.clearTerminal();
    } else {
      const response = this.getCommand(command);

      // Display the response in the terminal
      this.child.write('\r\n' + response + '\r\n');

      // Reset the prompt and display the command prompt again
      this.prompt = '';
      this.child.write('\x1b[32m' + 'root@AhmedHoussamBouzine:~# ' + '\x1b[0m');
    }
  }

  private clearTerminal() {
    if (this.child.underlying) {
      this.child.underlying.clear();
      this.prompt = '';
      this.child.write('\r\n' + '\x1b[32m' + 'root@AhmedHoussamBouzine:~# ' + '\x1b[0m');
    }
  }

  private handleBackspace() {
    // Handle backspace logic
    if (this.prompt.length > 0) {
      this.prompt = this.prompt.slice(0, -1);
      this.child.write('\b \b');
    }
  }

  private handleCtrlC() {
    // Handle Ctrl+C logic
    this.child.write('^C\r\n');
    this.prompt = '';
    this.child.write('\x1b[32m' + 'root@AhmedHoussamBouzine:~# ' + '\x1b[0m');
  }
  private getCommand(command: string) {
    switch (command) {
      case 'help':
        return ' Get to know me : \r\n\r\n =========================================== \r\n\r\n - about :  Learn more about my background, interests, and passion. \r\n - education : Explore my academic journey. \r\n - experience : Discover my professional work and internships. \r\n - skills : See the technologies I specialize in. \r\n - projects : Explore some of the key projects I\'ve worked on. \r\n - contact : Find out how to get in touch with me. \r\n\r\n\r\n Type the command (e.g., \'about\') to delve into each section.';
      case 'about':
        return ' Profile overview : \r\n\r\n =========================================== \r\n\r\n Hello! 👋 \r\n I\'m an enthusiastic Big Data & Cloud Computing Engineering student with a passion for computer science. \r\n I find joy in exploring Linux, Cloud, software architecture, Rust, and systems.\r\n Beyond the world of computer science, my interests extend to politics, startups, and Sports. \r\n And by the way, I like lions! 🦁';
      case 'education':
        return ' My Education : \r\n\r\n =========================================== \r\n\r\n 2022-present : Engineering degree: Computer Engineering, Big Data, and Cloud Computing (II-BDCC) at ENSET Mohammedia. \r\n 2020-2022 : University Diploma of Technology (DUT), Computer Science (Software Engineering option) at EST Fez. \r\n 2020 : Baccalaureate, Mathematical Sciences B BIOF.';
      case 'experience':
        return ' My Experience : \r\n\r\n =========================================== \r\n\r\n Jul 2023 - Aug 2023 : Odoo Developer Intern at ENSAF Fez. \r\n I had the opportunity to work on a project titled \'Design, Development, and Containerization of Attestation Management.\' The main objective of this project was to create a customized Odoo module that improves the management of different attestation requests submitted by ENSAF personnel. \r\n ------------------------------------------- \r\n Apr 2022 - Jun 2022 : Web Developer Intern at OCTOBOT CONSULTING & TRAINING. \r\n I had the opportunity to contribute to the implementation of a web application designed for the internal management of a private institution. As part of my role, I was responsible for database modeling and design, as well as building an efficient and scalable API to support the application\'s functionality. \r\n ------------------------------------------- \r\n July 2021 : Web Developer Intern at OCTOBOT CONSULTING & TRAINING. \r\n I had the opportunity to work on a web development project centered around creating a promotional website and web application for the internal management of a GYM. ';
      case 'skills':
        return ' Skill Highlights : \r\n\r\n =========================================== \r\n\r\n - Angular \r\n - Laravel \r\n - Git \r\n - Express \r\n - TypeScript \r\n - TailwindCss \r\n - Node.js \r\n - JavaScript \r\n - Odoo ERP \r\n - Python \r\n - Cloud \r\n - Docker\r\n - Linux\r\n - Prisma\r\n - PostgreSQL\r\n - MySQL\r\n - Spring\r\n - JAVA\r\n - Android Studio \r\n - MongoDB';
      case 'contact':
        return ' Get in touch with me : \r\n\r\n =========================================== \r\n\r\n - Email : ahmedhoussam.bouzine@gmail.com \r\n - Website : ahmedhoussambouzine.com \r\n - GitHub profile : https://github.com/AhmedHoussamBouzine \r\n - Phone : +212 6 36 56 20 78 \r\n - LinkedIn : https://www.linkedin.com/in/ahmed-houssam-bouzine/ ';
      case 'projects':
        return ' My projects : \r\n\r\n =========================================== \r\n\r\n-I had the opportunity to work on a project implementing a mobile application for tracking the value of a cryptocurrency portfolio. My responsibilities included database modeling and design, building two efficient and scalable APIs for the application, and implementing a solution based on Web Sockets to obtain real-time cryptocurrency prices. \r\n\r\n-I had the privilege of contributing to the creation of a platform designed to simplify the scripting process for academic video capsules. This platform utilized an XML database as the foundation for storing and managing the data. As a dedicated web developer, my primary responsibility revolved around constructing an efficient API that seamlessly facilitated the insertion and extraction of data from XML files. \r\n\r\n- I had the opportunity to work on a project titled \'Design, Development, and Containerization of Attestation Management.\' The main objective of this project was to create a customized Odoo module that improves the management of different attestation requests submitted by ENSAF personnel. \r\n\r\n- I had the opportunity to contribute to the implementation of a web application designed for the internal management of a private institution. As part of my role, I was responsible for database modeling and design, as well as building an efficient and scalable API to support the application\'s functionality. \r\n\r\n- I had the opportunity to work on a web development project centered around creating a promotional website and web application for the internal management of a GYM.\r\n\r\n- I contributed to the development of a secure instant messaging desktop application. The primary focus of this project was to implement end-to-end asymmetric encryption using the RSA algorithm, ensuring the confidentiality and integrity of user messages. Users were provided with a secure communication channel through the exchange of public and private key pairs.';
      default:
        return command + ': Command not found';
    }
  }
}
