import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

// Components vs Pages: Pages are 'Routable'
// https://www.reddit.com/r/reactjs/comments/t62bqe/pages_vs_components_confused_about_folder/

// const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
const ExploreContainer = ({ name }: ContainerProps) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
