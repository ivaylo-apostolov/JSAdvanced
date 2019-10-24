const SoftUniFy = require('../index.js');

const assert = require('chai').assert;
const expect = require('chai').expect;

describe("SoftUniFy", function () {
    it('Should contain allSongs property that is initialized as an empty object', function () {
        let soft = new SoftUniFy();
        assert.equal(Object.keys(soft.allSongs), 0);
    });
    it('downloadSong(artist, song, lyrics)', function () {
        let soft = new SoftUniFy();
        soft.downloadSong('metallica', 'one', 'remember');
        assert.equal(soft.allSongs.metallica.songs.length, 1);
        assert.equal(soft.allSongs.metallica.songs[0], 'one - remember');
    });
    it('playSong(song)', function () {
        let soft = new SoftUniFy();
        assert.equal(soft.playSong('one'), 'You have not downloaded a one song yet. Use SoftUniFy\'s function downloadSong() to change that!');
        soft.downloadSong('metallica', 'one', 'remember');
        assert.equal(soft.playSong('one'), 'metallica:\none – remember');
    });
    
});