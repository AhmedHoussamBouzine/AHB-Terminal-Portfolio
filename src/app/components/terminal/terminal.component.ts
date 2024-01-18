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
    this.child.write('Enter \'help\' to get started!\r\n');
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
    const response = this.getCommand(command);

    // Display the response in the terminal
    this.child.write('\r\n' + response + '\r\n');

    // Reset the prompt and display the command prompt again
    this.prompt = '';
    this.child.write('\x1b[32m' + 'root@AhmedHoussamBouzine:~# ' + '\x1b[0m');
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
        return ' Get to know me \r\n 1. about \r\n 2. education \r\n 3. experience \r\n 4. skills \r\n 5. contact \r\n';
      case '1':
        return ' I am Ahmed Houssam BOUZINE a full stack developer and Big Data & Cloud Computing Engineering Student from Morocco, My skill set encompasses both web development and mobile application development. I am always looking for new challenges and opportunities to learn and grow.';
      case 'about':
          return ' I am Ahmed Houssam BOUZINE a full stack developer and Big Data & Cloud Computing Engineering Student from Morocco, My skill set encompasses both web development and mobile application development. I am always looking for new challenges and opportunities to learn and grow.';
      case 'education':
          return ' My Education : \r\n =========================================== \r\n 2023-2025 : Engineering degree: Computer Engineering, Big Data, and Cloud Computing (II-BDCC) at ENSET Mohammedia. \r\n 2020-2022 : University Diploma of Technology (DUT), Computer Science (Software Engineering option) at EST Fez. \r\n 2020 : Baccalaureate, Mathematical Sciences B BIOF at AL ASSIMA School Group.';
      case '2':
          return ' My Education : \r\n =========================================== \r\n 2023-2025 : Engineering degree: Computer Engineering, Big Data, and Cloud Computing (II-BDCC) at ENSET Mohammedia. \r\n 2020-2022 : University Diploma of Technology (DUT), Computer Science (Software Engineering option) at EST Fez. \r\n 2020 : Baccalaureate, Mathematical Sciences B BIOF at AL ASSIMA School Group.';
      case 'experience':
          return ' My Experience : \r\n =========================================== \r\n Jul 2023 - Aug 2023 : Odoo Developer Intern at ENSAF Fez. \r\n I had the opportunity to work on a project titled \'Design, Development, and Containerization of Attestation Management.\' The main objective of this project was to create a customized Odoo module that improves the management of different attestation requests submitted by ENSAF personnel. \r\n ------------------------------------------- \r\n Apr 2022 - Jun 2022 : Web Developer Intern at OCTOBOT CONSULTING & TRAINING. \r\n I had the opportunity to contribute to the implementation of a web application designed for the internal management of a private institution. As part of my role, I was responsible for database modeling and design, as well as building an efficient and scalable API to support the application\'s functionality. \r\n ------------------------------------------- \r\n July 2021 : Web Developer Intern at OCTOBOT CONSULTING & TRAINING. \r\n I had the opportunity to work on a web development project centered around creating a promotional website and web application for the internal management of a GYM. ';
      case '3':
          return ' My Experience : \r\n =========================================== \r\n Jul 2023 - Aug 2023 : Odoo Developer Intern at ENSAF Fez. \r\n I had the opportunity to work on a project titled \'Design, Development, and Containerization of Attestation Management.\' The main objective of this project was to create a customized Odoo module that improves the management of different attestation requests submitted by ENSAF personnel. \r\n ------------------------------------------- \r\n Apr 2022 - Jun 2022 : Web Developer Intern at OCTOBOT CONSULTING & TRAINING. \r\n I had the opportunity to contribute to the implementation of a web application designed for the internal management of a private institution. As part of my role, I was responsible for database modeling and design, as well as building an efficient and scalable API to support the application\'s functionality. \r\n ------------------------------------------- \r\n July 2021 : Web Developer Intern at OCTOBOT CONSULTING & TRAINING. \r\n I had the opportunity to work on a web development project centered around creating a promotional website and web application for the internal management of a GYM. ';
      case 'skills':
          return ' My Skills : \r\n =========================================== \r\n - Angular \r\n - Laravel \r\n - Git \r\n - Express \r\n - TypeScript \r\n - TailwindCss \r\n - Node.js \r\n - JavaScript \r\n - Odoo ERP \r\n - Python \r\n - Cloud \r\n - Docker\r\n - Linux\r\n - Prisma\r\n - PostgreSQL\r\n - MySQL\r\n - Spring\r\n - JAVA\r\n - Android Studio \r\n - MongoDb \r\n - Rust ';
      case '4':
          return ' My Skills : \r\n =========================================== \r\n - Angular \r\n - Laravel \r\n - Git \r\n - Express \r\n - TypeScript \r\n - TailwindCss \r\n - Node.js \r\n - JavaScript \r\n - Odoo ERP \r\n - Python \r\n - Cloud \r\n - Docker\r\n - Linux\r\n - Prisma\r\n - PostgreSQL\r\n - MySQL\r\n - Spring\r\n - JAVA\r\n - Android Studio \r\n - MongoDb \r\n - Rust ';
      case 'contact':
          return ' Contact Me : \r\n =========================================== \r\n - Email : ahmedhoussam.bouzine@gmail.com \r\n - Phone : +212 6 36 56 20 78 \r\n - LinkedIn : https://www.linkedin.com/in/ahmed-houssam-bouzine/ ';
      case '5':
          return ' Contact Me : \r\n =========================================== \r\n - Email : ahmedhoussam.bouzine@gmail.com \r\n - Phone : +212 6 36 56 20 78 \r\n - LinkedIn : https://www.linkedin.com/in/ahmed-houssam-bouzine/ ';
      case 'clear':
            return '';

      default:
        return ' Command ' + command + ' not found';
    }
  }
}
