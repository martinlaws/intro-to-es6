document.addEventListener("DOMContentLoaded", () => {
    const song = {
        name: 'No Scrubs',
        artist: 'TLC',
        featuring: 'Martin Laws'
    };

    const songMarkup = `
        <div class="song">
            <p>
                ${song.name} - ${song.artist}
                ${song.featuring ? `(feat. ${song.featuring})` : ''}
            </p>
        </div>
    `;

    console.log(songMarkup);
    document.querySelector('#song-app').innerHTML = songMarkup;

    // we can also take a React-style approach like so:

    // const songList = [{
    //     name: 'No Scrubs',
    //     artist: 'TLC',
    //     featuring: 'Martin Laws'
    // }, {
    //     name: 'Watefalls',
    //     artist: 'TLC'
    // }];
    //
    // function renderSongs(songList) {
    //     return `
    //         ${songList.map(song => `
    //             <div class="song">
    //                 <p>
    //                     ${song.name} - ${song.artist}
    //                     ${song.featuring ? `(feat. ${song.featuring})` : ''}
    //                 </p>
    //             </div>
    //         `).join('')}
    //     `
    // }
    //
    // const songsMarkup = `
    //     <div class="songs">
    //         <h3>songs</h3>
    //         ${renderSongs(songList)}
    //     </div>
    // `;
    //
    // console.log(songsMarkup);
    // document.querySelector('#songs-app').innerHTML = songsMarkup;
});
