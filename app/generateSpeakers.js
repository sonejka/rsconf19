let speakersJSON = require('./data/speakers');


for (let i = 0; i < speakersJSON.length; i++) {
  generateSpeakerPage(speakersJSON[i]);
}

function generateSpeakerPage(speaker) {
  let ejs = require('ejs');
  let fileSystem = require('fs');

  let speakerFileName = speaker.name.replace(' ', '-').toLowerCase();

  ejs.renderFile(__dirname + '/templates/speaker.ejs', speaker, function(err, str) {
    // str => Rendered HTML string

    fileSystem.writeFile(__dirname + '/speakers/' + speakerFileName + '.html', str, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('The file was saved!');
    });
  });
}
