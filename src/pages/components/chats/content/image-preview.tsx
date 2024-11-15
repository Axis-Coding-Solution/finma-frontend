
const ImagePreview = ({url}:{url:string}) => {
  return (
    <div className="preview-container w-32 h-32">
    <img src={url} alt="Image preview" className="preview-image" />
  </div>
  )
}

export default ImagePreview