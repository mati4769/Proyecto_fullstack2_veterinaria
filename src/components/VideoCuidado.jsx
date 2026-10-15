function VideoCuidado({ src, titulo }) {
  return (
    <div className="video-caja">
      <video src={src} title={titulo} controls className="mi-video"></video>
    </div>
  )
}

export default VideoCuidado
