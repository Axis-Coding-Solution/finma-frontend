
const VideoPreview = ({url}:{url:string}) => {
  return (
    <div className="preview-container w-32 h-58">
    <video controls className="">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}

export default VideoPreview