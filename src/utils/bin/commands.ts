import { readme } from './api_commands';
// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  let c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
  \n${c}\n
Press 'Tab' to trigger auto completion.
press 'Ctrl+l' or type 'clear' to clear the terminal.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my portfolio!
To know more about me, please type:\n
'summary'   --> For a brief introduction.
'resume'    --> For my latest resume.
'skills'    --> To list my skills.
'projects'  --> To load my projects.
'github'    --> For my github profile.
'linkedin'  --> For my linkedin profile.
'education' --> To list my education.
'experience'--> To list my experiences.
'email'     --> To email me.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.name}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `Woah, you still use 'vi'? Just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. How about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? Too fancy. Why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `You know what? Just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(() => {
    window.open('https://two-dice.netlify.app/', '_blank');
  }, 2000);
  return `Permission denied, lets do something else.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  <Image src="${config.avatar}" width="240" height="240" alt="Kazim Kayhan's avatar"/>
  ╦╔═┌─┐┌─┐┬┌┬┐  ╦╔═┌─┐┬ ┬┬ ┬┌─┐┌┐┌
  ╠╩╗├─┤┌─┘││││  ╠╩╗├─┤└┬┘├─┤├─┤│││
  ╩ ╩┴ ┴└─┘┴┴ ┴  ╩ ╩┴ ┴ ┴ ┴ ┴┴ ┴┘└┘
  
  Type 'help' to see the list of available commands.
  Type 'summary' to briefly introduce myself.
`;
};
