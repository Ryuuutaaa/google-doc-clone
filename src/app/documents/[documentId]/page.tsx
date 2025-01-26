import React from "react";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentId = async ({ params }: DocumentIdPageProps) => {
  const awaitParams = await params;
  const documentId = awaitParams.documentId;

  return <div>DocumentId {documentId}</div>;
};

export default DocumentId;
