import { Files } from "lucide-react";

const DocumentPreview = ({ url, name }: { url: string; name?: string }) => {
  return (
    <div className="preview-container max-w-[100px]">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="document-link"
        aria-label={`Document: ${name || "View Document"}`}
        title={name || "View Document"}
      >
        <Files />

        <span className="document-name text-sm ">{name || "Click here"}</span>
      </a>
    </div>
  );
};

export default DocumentPreview;
