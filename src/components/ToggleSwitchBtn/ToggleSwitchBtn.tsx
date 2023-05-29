import React from 'react';
import classNames from 'classnames';

import './toggleSwitchBtn.css';

export interface ToggleSwitchBtnProps {
  checked: true | false;
  description: string;
  disabled?: true | false;
  hideLabel?: true | false;
  id: string;
  label: string;
  onChange?: (arg: unknown) => void;
  reverse?: true | false;
}

const ToggleSwitchBtn: React.FC<ToggleSwitchBtnProps> = ({
  checked,
  description,
  disabled = false,
  hideLabel = false,
  id,
  label,
  onChange,
  reverse = false
}) => {
  const baseClass = 'mm-toggle-switch';

  const handleToggleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  const renderLabelText = () => {
    if (hideLabel) {
      return null;
    }

    return (
      <span aria-hidden="true" className={`${baseClass}-label-text`}>
        {label}
      </span>
    );
  };

  const renderSlider = () => <span className={`${baseClass}-slider`} />;

  return (
    <div
      className={classNames(baseClass, {
        [`${baseClass}--reverse`]: reverse
      })}
    >
      <input
        checked={checked}
        className={`${baseClass}-input`}
        disabled={disabled}
        id={id}
        name={id}
        onChange={handleToggleChange}
        type="checkbox"
        aria-label={description}
      />
      <label className={`${baseClass}-label`} htmlFor={id}>
        {!reverse && renderSlider()}
        {renderLabelText()}
        {reverse && renderSlider()}
      </label>
    </div>
  );
};

export default ToggleSwitchBtn;
