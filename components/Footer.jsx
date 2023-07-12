

const Footer = () => {
  return (
    <>
      <div className="text-white text-center p-2">
        <div className="flex justify-center my-8">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/logos/instagramLogo.png" alt="Featured" className="w-10 h-10 mx-4 hover:animate-bounce" />
          </a>
          <a href="https://www.spotify.com/" target="_blank" rel="noreferrer">
            <img src="/logos/spotifyMusic.png" alt="Featured" className="w-10 h-10 mx-4 hover:animate-bounce" />
          </a>
          <a href="https://www.apple.com/music/" target="_blank" rel="noreferrer">
            <img src="/logos/appleMusic.png" alt="Featured" className="w-10 h-10 mx-4 hover:animate-bounce" />
          </a>
        </div>

        <p className="italic"> TURKEY BOY © 2023 </p>

        <p className="mt-4">Website by <a className="text-sm text-blue-300 underline" href="https://www.zeuscordeiro.com/">Zeus⚡Codes</a> </p>

      </div>
    </>
  )
}

export default Footer