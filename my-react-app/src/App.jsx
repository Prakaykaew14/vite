import { useRef, useState } from 'react'
<audio
  ref={audioRef}
  src='/music/Blue_Jeans.mp3'
/>

function App() {
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const albums = [
    {
      title: 'Margaret',
      artist: 'Lana Del Rey',
      image:
        'https://i.scdn.co/image/ab67616100005174b99cacf8acd5378206767261'
    },
    {
      title: 'Henry Come On',
      artist: 'Lana Del Rey',
      image:
        'https://s.yimg.com/ny/api/res/1.2/HlvX80sRItNOLM1RU4ZEUw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUzOTtjZj13ZWJw/https://media.zenfs.com/fr/webedia_purecharts_978/422251cb1c6bb1beb062e884fcc1af51'
    },
    {
      title: 'Ultraviolence',
      artist: 'Lana Del Rey',
      image:
        'https://younerded.wordpress.com/wp-content/uploads/2014/06/ultraviolencef.jpg'
    }
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        background:
          'linear-gradient(135deg, #f8fafc, #e2e8f0, #ffffff)',
        fontFamily: 'Arial'
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: '260px',
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid rgba(255,255,255,0.5)',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '30px',
              color: '#0f172a',
              marginBottom: '40px'
            }}
          >
            🎵 Music
          </h1>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              color: '#475569',
              fontSize: '18px'
            }}
          >
            <div>🏠 Home</div>
            <div>🎧 Playlist</div>
            <div>❤️ Favorites</div>
            <div>🔥 Trending</div>
            <div>⚙ Settings</div>
          </div>
        </div>

        <div
          style={{
            background: '#0f172a',
            color: 'white',
            padding: '20px',
            borderRadius: '25px'
          }}
        >
          <p style={{ fontSize: '14px', opacity: 0.8 }}>
            Premium Account
          </p>

          <h3 style={{ marginTop: '10px' }}>
            Enjoy High Quality Music
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Search */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px'
          }}
        >
          <input
            type='text'
            placeholder='Search music...'
            style={{
              width: '320px',
              padding: '15px 20px',
              borderRadius: '50px',
              border: 'none',
              background: 'rgba(255,255,255,0.7)',
              fontSize: '16px',
              outline: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}
          />

          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              overflow: 'hidden'
            }}
          >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcik6rwzu1xFWkwky9eHK95gtC0-p5P-Z_A&s'
              alt='profile'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Banner */}
        <div
          style={{
            background:
              'linear-gradient(135deg, #0f172a, #334155)',
            borderRadius: '35px',
            padding: '40px',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <p style={{ opacity: 0.7 }}>
              Trending Playlist
            </p>

            <h1
              style={{
                fontSize: '45px',
                marginTop: '10px'
              }}
            >
              Lana Del Rey
            </h1>

            <p
              style={{
                marginTop: '15px',
                opacity: 0.8,
                maxWidth: '400px'
              }}
            >
              Relax and enjoy your favorite music
              anytime anywhere.
            </p>
          </div>

          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/6d/Lana_Del_Rey_Releases_Music_Video_For_New_Track_%27Burning_Desire%279.jpg'
            alt='banner'
            style={{
              width: '250px',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '25px'
            }}
          />
        </div>

        {/* Albums */}
        <div style={{ marginTop: '45px' }}>
          <h2
            style={{
              color: '#0f172a',
              marginBottom: '25px'
            }}
          >
            Popular Albums
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '25px'
            }}
          >
            {albums.map((album, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '30px',
                  padding: '18px',
                  boxShadow:
                    '0 10px 25px rgba(15,23,42,0.08)'
                }}
              >
                <img
                  src={album.image}
                  alt={album.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '22px'
                  }}
                />

                <h3
                  style={{
                    marginTop: '18px',
                    color: '#0f172a'
                  }}
                >
                  {album.title}
                </h3>

                <p
                  style={{
                    color: '#64748b',
                    marginTop: '8px'
                  }}
                >
                  {album.artist}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Music Player */}
        <div
          style={{
            marginTop: 'auto',
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(20px)',
            borderRadius: '30px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow:
              '0 10px 30px rgba(15,23,42,0.08)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            <img
              src='https://m.media-amazon.com/images/M/MV5BNWRiODk3YmItZTYwZi00YmU2LWI0ZmQtMGU1YjM1MGNhZTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
              alt='music'
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />

            <div>
              <h3 style={{ color: '#0f172a' }}>
                Blue Jeans
              </h3>

              <p style={{ color: '#64748b' }}>
                Lana Del Rey
              </p>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={song}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <button
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: '#e2e8f0',
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              ⏮
            </button>

            <button
              onClick={toggleMusic}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                border: 'none',
                background:
                  'linear-gradient(135deg, #0f172a, #334155)',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                boxShadow:
                  '0 10px 20px rgba(15,23,42,0.2)'
              }}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>

            <button
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: '#e2e8f0',
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              ⏭
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App