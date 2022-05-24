import Logo from 'components/Logo';


const Header = () => {
  const onToggle = () => {
    console.log('toggle');
  };

  return (
    <header style={{ marginTop: 54 }}>
      <div className="recu-story">
        <Logo />
      </div>

      <nav>
        <button type="button" onClick={onToggle}>
          <span>
            {/* 메뉴 열림 */}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
