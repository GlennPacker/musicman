
const items = [{
  artist: 'abc',
  album: 'def',
  song: 'ghi'
},
{
  artist: 'def',
  album: 'def',
  song: 'def'
}];

// eslint-disable-next-line no-unused-vars
export function musicSearch(searchTerm) {
  console.log('service hit');
  return new Promise((resolve) => {    
    const result = items.filter(a => 
      (a.artist && a.artist.toLocaleLowerCase().includes(searchTerm)) ||
      (a.album && a.album.toLocaleLowerCase().includes(searchTerm)) ||
      (a.song && a.song.toLocaleLowerCase().includes(searchTerm))
    );
    resolve([...result]);
  });
}