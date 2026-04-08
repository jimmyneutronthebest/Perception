interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({ label, onClick, disabled }: PrimaryButtonProps) => (
  <button className="primary-btn" onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default PrimaryButton;
