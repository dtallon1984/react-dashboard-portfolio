import useNavi from "../hooks/use-navi";

function Route({ path, children }) {
  const { currentPath } = useNavi();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
