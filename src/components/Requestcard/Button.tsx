import './styles.scss';
type GreetingProps = {
  props: {
    title: string;
    background: string;
		color: string;
  };
};

export default function Button({ props }: GreetingProps) {
  const { title, background, color } = props;
  return (
    <>
      <button type='button' style={{ background: background, color: color}}>{title}</button>
    </>
  );
}
