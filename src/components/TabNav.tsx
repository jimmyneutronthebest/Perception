interface TabNavProps {
  tabs: string[];
  activeTab: string;
  onSelect: (tab: string) => void;
}

const TabNav = ({ tabs, activeTab, onSelect }: TabNavProps) => (
  <nav className="tab-nav">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`tab-btn ${activeTab === tab ? 'tab-btn-active' : ''}`}
        onClick={() => onSelect(tab)}
      >
        {tab}
      </button>
    ))}
  </nav>
);

export default TabNav;
