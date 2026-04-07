interface TabNavProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

const TabNav = ({ tabs, active, onChange }: TabNavProps) => (
  <nav className="sticky top-0 z-10 border-b border-zinc-800 bg-[#0f0f0f]">
    <ul className="mx-auto flex max-w-5xl items-center justify-between px-2">
      {tabs.map((tab) => (
        <li key={tab}>
          <button
            onClick={() => onChange(tab)}
            className={`border-b-2 px-3 py-3 text-sm ${active === tab ? 'border-white text-zinc-100' : 'border-transparent text-zinc-500'}`}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default TabNav;
