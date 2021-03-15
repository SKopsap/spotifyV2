<div align="center" justify="center" style="text-align:center; -webkit-animation: rotate-90-cw 3s linear infinite both; animation: rotate-90-cw 3s linear infinite both">
  <pre> <img width="310" alt="Strive Logo" src="https://bookface-images.s3.amazonaws.com/logos/8e7133f016718ede36663987992de88d15606d02.png?1593602849">  <img width="450" alt="Strive Logo" src="https://developer.spotify.com/assets/branding-guidelines/logos.svg"> </pre>
</div>
<br>

#### Spotify V2 - [Live demo](https://spotify-v2.netlify.app/)

> Rebuild of our first buildweek project - This is a version 2 clone of the Spotify Web App.
<br>

![image](https://user-images.githubusercontent.com/65465380/111052084-dd004f80-844f-11eb-9c40-4997c2e9603e.png)

> All contributors have taken ownership of multiple critical issues and feature enhancements listed on the project boards submitting commits of at the highest standard possible.

#### Stack

> Tools, libraries and awesome tech sanctioned for this project

- Major languages - HTML, SCSS, Javascript(ES6)
- Frameworks - BootstrapV5
- Technologies - Netlify Hosting & CDN
- Infrastructure - Github CICD

#### Wakatime stats
<img width="800" src="https://github.com/skopsap/spotifyv2/blob/develop/images/stat.svg" alt="Waka stats for develop branch"/>

#### Devops

> Our git development workflow as follows: 

- Main branch for live production/deployment with Netlify.
- Development branch for feature integration and application testing.
- Local development branches for ongoing feature development.

```            
                             _______       _____                        
                             ___    |      __  /___________ _______ ___ 
                             __  /| |      _  __/  _ \  __ `/_  __ `__ \
               Development   _  ___ |      / /_ /  __/ /_/ /_  / / / / /
               Staging       /_/  |_|      \__/ \___/\__,_/ /_/ /_/ /_/ 
                   ^
Production         |                        
Main branch        |       
^  <-------------- |
|                  |\
|                  | \
|                  |  \  local feature branches merged into dev/staging for  
|                  |  /  testing before being merged to main/production   
|                  | /   ex. branch: toni/header-img-fix  
|                  |/ 
|                  |
main ------------ dev <------> freature/branches (Ekow, Toni, Huseyin & Sean)

```

#### Getting Started

Git clone the repository to your local computer, use LiveServer to view in development.

#### Prerequisites

- Visual Studio Code (recommended)
- SASS live compiler plugin for vs code to compile scss files.
- LiveServer plugin for serving the index.html file in your local browser.

#### Deployment

Our 'main' deployment branch is CI into Netlify so any pushes to the main branch will auto publish to Netlify hosting and thier edge CDN.

#### Team

<div float="left">
  <div>
    👤 Ekow
  </dv>
  <div>
    👤 Huseyin
  </dv>
  <div>
    👤 Tony
  </dv>
  <div>
    👤 Sean
    <a href="https://github.com/SKopsap">Github</a> |
    <a href="https://linkedin.com/seanknowlesmd">LinkedIn</a>
  </dv>
</div>

#### 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/SKopsap/SpotifyV2/issues).

#### Show your support

Give a ⭐️ if you like this project, every star means something, show us some love :)!

#### Acknowledgments

To our Strive mentors:

- Luis
- Stefano
- Tatiana
- Ubeyt
- Riccardo

#### 📝 License

No need, this is freely available.
Copied
