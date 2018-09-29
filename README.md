This project is a single web app of a clock heavily inspired by 
http://getyourwebup.com/lolcat-clock/index.html
as part of my portfolio following the recomendations from
https://skillcrush.com/2018/06/18/projects-you-can-do-with-javascript/

As this date, the create-react-app script has some issues when ejecting. After
ejecting the app, i had to add the babel-loader dependency:

    yarn add babel-loader@7

Notice that the version is a must, if the lastest is installed, several conflicts
will rise with @babel/core 7. See
https://github.com/storybooks/storybook/issues/3883


Also, this project uses sass

https://medium.com/@oreofeolurin/configuring-scss-with-react-create-react-app-1f563f862724


