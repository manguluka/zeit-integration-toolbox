import Preact, { h, Component } from "preact";
import styles from "./style.css";

export const Page = ({ children, ...props }) => (
	<div class="cmp cmp-page">{children}</div>
);

export const Button = ({ children, ...props }) => (
	<button className="cmp cmp-button">{children}</button>
);

export const Box = ({ children, ...props }) => (
	<div class="cmp cmp-box" style={{ ...props }}>
		{children}
	</div>
);

export const Link = ({ children, ...props }) => (
	<a class="cmp cmp-link" {...props}>
		{children}
	</a>
);

export const Projectswitcher = ({ children, ...props }) => (
	<div class="cmp cmp-project-switcher">Not yet implemented</div>
);

export const Option = ({ children, value, ...props }) => (
	<option class="cmp cmp-option" selected={props.selected}>
		{value}
	</option>
);

export const Select = ({ children, ...props }) => {
	const childrenWithProps = children.map((child, idx) => {
		return Preact.cloneElement(child, { selected: idx == 0 });
	});
	return (
		<select class="cmp cmp-select" {...props}>
			{childrenWithProps}
		</select>
	);
};

export const Input = ({ children, ...props }) => {
	return <input class="cmp cmp-input" type="text" {...props} />;
};

export const Textarea = ({ children, ...props }) => {
	return (
		<textarea class="cmp cmp-textarea" {...props}>
			{children}
		</textarea>
	);
};

export const Checkbox = ({ children, ...props }) => {
	return <input class="cmp cmp-checkbox" type="checkbox" {...props} />;
};
