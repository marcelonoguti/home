import './CodeWindow.css'

export function CodeWindow() {
  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-window-bar">
        <span className="code-dot code-dot-red" />
        <span className="code-dot code-dot-yellow" />
        <span className="code-dot code-dot-green" />
      </div>
      <pre className="code-window-body">
        <code>
          <span className="code-line">
            <span className="code-keyword">class</span>{' '}
            <span className="code-class">Engineer</span> {'{'}
          </span>
          <span className="code-line">
            {'  '}
            <span className="code-fn">constructor</span>
            {'() {'}
          </span>
          <span className="code-line">
            {'    '}
            <span className="code-prop">this</span>.role ={' '}
            <span className="code-string">'Backend Architect'</span>;
          </span>
          <span className="code-line">
            {'    '}
            <span className="code-prop">this</span>.focus = [
          </span>
          <span className="code-line">
            {'      '}
            <span className="code-string">'Scalability'</span>,{' '}
            <span className="code-string">'Reliability'</span>,{' '}
            <span className="code-string">'Performance'</span>
          </span>
          <span className="code-line">{'    ];'}</span>
          <span className="code-line">{'  }'}</span>
          <span className="code-line" />
          <span className="code-line">
            {'  '}
            <span className="code-keyword">async</span>{' '}
            <span className="code-fn">build</span>
            {'() {'}
          </span>
          <span className="code-line">
            {'    '}
            <span className="code-keyword">return await</span>{' '}
            <span className="code-prop">this</span>.createImpact();
          </span>
          <span className="code-line">{'  }'}</span>
          <span className="code-line">{'}'}</span>
        </code>
      </pre>
    </div>
  )
}
