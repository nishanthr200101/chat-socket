import React, { useState } from 'react';

const CodeBlock = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
      })
      .catch(() => setCopySuccess('Failed to copy'));
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
      <pre style={{ margin: 0 }}>
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '5px 10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Copy
      </button>
      {copySuccess && <span style={{ marginLeft: '10px', color: 'green' }}>{copySuccess}</span>}
    </div>
  );
};

// Usage Example
const App = () => {
  const codeSnippet = `
const PORT = 5000;
server.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
`;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Code with Copy Button</h1>
      <CodeBlock code={codeSnippet} />
    </div>
  );
};

export default App;
