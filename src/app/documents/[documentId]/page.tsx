import React from "react";
import Editor from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentId = async ({ params }: DocumentIdPageProps) => {
  const awaitParams = await params;
  const documentId = awaitParams.documentId;

  return (
    <div>
      DocumentId {documentId} <Editor />
    </div>
  );
};

export default DocumentId;
