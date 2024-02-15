import styled from 'styled-components';

export const Scene = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SceneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 70px;
`;

export const SceneTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 30px;
  color: rgba(161, 134, 100, 0.618);
  font-family: 'Courier New', Courier, monospace;
`;

export const SceneImageContainer = styled.div`
  width: 80%;
  height: 25vh;
  margin-bottom: 50px;
`;

// export const SceneImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

export const SceneDetails = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  width: 90%;
  background: linear-gradient(135deg, #ffa6009f, #ff14919d);
  border-radius: 10px;
  margin-top: 0;
`;

export const ScenePlot = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  margin-bottom: 30px;
`;

export const SceneDuration = styled.div`
  font-size: 12px;
  font-style: italic;
`;

export const SceneButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const SceneButton = styled.button`
  padding: 7px 15px;
  margin: 0 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: darkorange;
  }
`;
