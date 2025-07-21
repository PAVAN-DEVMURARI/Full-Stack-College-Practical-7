import  { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

//   const handleNav = (section) => {
//     // Example navigation: scroll to section or handle route
//     alert(`Navigate to ${section}`);
//     setIsOpen(false);
//   };

  return (
    <>
      <button onClick={handleToggle} style={{ margin: '10px' }}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <div
        style={{
          width: isOpen ? '200px' : '0',
          height: '100vh',
          background: '#282c34',
          color: '#fff',
          overflowX: 'hidden',
          transition: 'width 0.3s',
          position: 'fixed',
          top: 0,
          left: 0,
          padding: isOpen ? '20px' : '0',
          zIndex: 1000,
        }}
      >
        {isOpen && (
          <>
            <h2>Sidebar</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '10px 0', cursor: 'pointer' }} onClick={() => handleNav('Home')}>Home</li>
              <li style={{ margin: '10px 0', cursor: 'pointer' }} onClick={() => handleNav('About')}>About</li>
              <li style={{ margin: '10px 0', cursor: 'pointer' }} onClick={() => handleNav('Contact')}>Contact</li>
              <li style={{ margin: '10px 0', cursor: 'pointer' }} onClick={() => handleNav('Services')}>Services</li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;