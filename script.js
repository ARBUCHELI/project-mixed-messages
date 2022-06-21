const bands = ['Nirvana', 'Metallica', 'Pearl Jam', 'Smashing Pumpkins', 'Radiohead', 'Stone Temple Pilots', 'The Cure'];

const songs = {
    NirvanaSongs: ['Come as you are', 'Smells like teen spirit', 'Lithium', 'In bloom', 'Polly', 'Drain you', 'Lounge act'],
    MetallicaSongs: ['One', 'Fade to black', 'The unforgiven', 'For whom the bell tolls', 'Enter sandman', 'Holier than you', 'Sad but ture'],
    PearlJamSongs: ['Once', 'Alive', 'Black', 'Oceans', 'Garden', 'Release', 'Even flow'],
    SmashingPumpkinsSongs: ['Tonight, Tonight', 'Take me down', 'Muzzle', 'Bodies', '1979', 'Galapogos', 'Bodies'],
    RadioHeadSongs: ['Creep', 'Stop whispering', 'Anyone can play the guitar', 'Vegetable', 'Blow out', 'Lurgee', 'Ripcord'],
    StoneTemplePilotsSongs: ['Wicked garden', 'Plush', 'Crackerman', 'Sex type thing', 'No memory', 'Piece of pie', 'Naked Sunday'],
    TheCureSongs: ['Just Like Heaven', 'Lullaby', 'Lovesong', 'High', 'A letter to Elise', 'Mint Car', 'Catch']
}

const activities = ['Go to take a walk', 'Go to the gym and workout', 'Go to the bar for a beer', 'Stay at home and meditate', 'Drive in the highway at a nice speed', 'Call your exgirlfriend', 'Just pack your bags and go back home'];

const randomBandIndex = Math.floor(Math.random()*bands.length);

const chosenBand = bands[randomBandIndex];

let chosenSong = '';
switch (chosenBand) {
    case 'Nirvana':
        chosenSong = songs.NirvanaSongs[Math.floor(Math.random()*songs.NirvanaSongs.length)];
        break;
    case 'Metallica':
        chosenSong = songs.MetallicaSongs[Math.floor(Math.random()*songs.MetallicaSongs.length)];
        break;
    case 'Pearl Jam':
        chosenSong = songs.PearlJamSongs[Math.floor(Math.random()*songs.PearlJamSongs.length)];
        break;
    case 'Smashing Pumpkins':
        chosenSong = songs.SmashingPumpkinsSongs[Math.floor(Math.random()*songs.SmashingPumpkinsSongs.length)];
        break;
    case 'Radiohead':
        chosenSong = songs.RadioHeadSongs[Math.floor(Math.random()*songs.RadioHeadSongs.length)];
        break;
    case 'Stone Temple Pilots':
        chosenSong = songs.StoneTemplePilotsSongs[Math.floor(Math.random()*songs.StoneTemplePilotsSongs.length)];
        break;
    default: 
        chosenSong = songs.TheCureSongs[Math.floor(Math.random()*songs.TheCureSongs.length)];
}

const randomActivityIndex = Math.floor(Math.random()*activities.length);

const chosenActivity = activities[randomActivityIndex];

console.log(`Today you should listen a nice good, and old ${chosenBand} album!`);
console.log(`You should definitely should enjoy a good song like ${chosenSong}!`);
console.log(`And I definitely think that you should ${chosenActivity} and enjoy your day.`);