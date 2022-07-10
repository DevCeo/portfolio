import React from "react";
import "./Projects.css";
import bearole from "../../assets/bearole.png";
import Dluv from "../../assets/D'Luv.jpeg";
import nexgen from "../../assets/Nexgen3pl.png";
import tiptalk from "../../assets/tiptalk.png";
import port from "../../assets/portfolio.png";

const Projects = () => {
  return (
    <section id="projects">
      <h4>What did i do</h4>
      <h2 style={{ marginBottom: "130px" }}>Projects</h2>

      <div className="container projects_container">
        <div className="projects">
          <h2>포트폴리오 웹사이트</h2>
          <h5 style={{ marginBottom: "28px" }}>2022.07~2022.07 (개인 프로젝트)</h5>
          <div className="projects_content">
            <img src={port} alt="port" className="projects_img" />
            <div className="projects_text">
              <p style={{ color: "#68acc5" }}>Description</p>
              <p>
                포트폴리오 용도로 제작한 웹사이트입니다. 순수 React.js로 개발을 완료하였지만 추후에 Three.js로
                인터렉티브한 페이지로 변경하는 것이 최종 목표입니다.
              </p>
              <div className="projects_do">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>What did i do</p>
                <p>
                  1. 페이지 UI/UX 디자인 개선/개발
                  <br />
                  2. 간단한 자기소개, 인적사항, 기술 스택, 프로젝트 경험 부분 UI 개발
                </p>
              </div>
              <div className="projects_stack">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>Tech Stack</p>
                <p>React.js, CSS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <h2>Bearole</h2>
          <h5 style={{ marginBottom: "28px" }}>2022.02~2022.06 (회사 팀 프로젝트)</h5>
          <div className="projects_content">
            <img src={bearole} alt="bearole" className="projects_img" />
            <div className="projects_text">
              <p style={{ color: "#68acc5" }}>Description</p>
              <p>
                시간제, 일급제, 마일스톤, 상주 업무, 복합 업무 등 다양한 계약환경을 제공하는 플랫폼입니다. 또한,
                클라이언트가 프리랜서를 모니터링하고 관리하는 타임트랙커 기능이 함께해 신뢰를 바탕으로 계약을 이행 할 수
                있는 환경을 제공합니다.
              </p>
              <div className="projects_do">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>What did i do</p>
                <p>
                  1. 랜딩페이지 기획/개발 <br />
                  2. 구인구직, 매칭, 트래킹 등의 필요한 모든 IT 서비스 기획/개발/배포
                  <br />
                  3. 생산성을 높이기 위한 시스템 아키텍쳐 구조 설계
                  <br />
                  4. 협업을 위한 코드 컨벤션 정립
                  <br />
                  5. AWS 인프라 운영하였으며 EC2, Route53, Amplify, S3 등을 사용
                  <br />
                  6. 모바일 및 탭 뷰를 위한 반응형 서비스로 제작
                  <br />
                  7. 채팅 서비스는 Electron을 사용하여 제작
                </p>
              </div>
              <div className="projects_stack">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>Tech Stack</p>
                <p>React.js, Electron, Sass, AWS, Socket.io, Redux</p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <h2>NEXGEN3PL</h2>
          <h5 style={{ marginBottom: "28px" }}>2022.01~2022.01 (외주 프로젝트)</h5>
          <div className="projects_content">
            <img src={nexgen} alt="nexgen" className="projects_img" />
            <div className="projects_text">
              <p style={{ color: "#68acc5" }}>Description</p>
              <p>아마존 특유의 3자 물류 판매 서비스 회사입니다.</p>
              <div className="projects_do">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>What did i do</p>
                <p>
                  1. 각종 페이지 UI/UX 디자인 개선/개발
                  <br />
                  2. Serverside와 필요한 부분 협업
                </p>
              </div>
              <div className="projects_stack">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>Tech Stack</p>
                <p>HTML, CSS, JavaScript, Jquery</p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <h2>D'Luv</h2>
          <h5 style={{ marginBottom: "28px" }}>2021.12~2021.12(2인 팀 프로젝트)</h5>
          <div className="projects_content">
            <img src={Dluv} alt="Dluv" className="projects_img" />
            <div className="projects_text">
              <p style={{ color: "#68acc5" }}>Description</p>
              <p>
                의류 쇼핑몰 플랫폼입니다.
                <br />
                주요 기능으로는 장바구니 페이지, 결제 시스템등의 서비스가 있습니다.
              </p>
              <div className="projects_do">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>What did i do</p>
                <p>
                  1. BootStrap을 사용하여 모바일 및 탭 뷰를 위한 반응형 서비스로 제작
                  <br />
                  2. MongoDB를 데이터베이스로 사용
                  <br />
                  3. Node.js와 Express.js를 사용하여 웹 서비스 및 API 서버 개발
                  <br />
                  4. React.js를 사용하여 웹 UI/UX 개발 했으며 Redux를 사용하여 상태관리
                </p>
              </div>
              <div className="projects_stack">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>Tech Stack</p>
                <p>React.js, Redux, Node.js, Express.js, Sass, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <h2>TipTalk</h2>
          <h5 style={{ marginBottom: "28px" }}>2022.11~2022.11 (3인 팀 프로젝트)</h5>
          <div className="projects_content">
            <img src={tiptalk} alt="tiptalk" className="projects_img" />
            <div className="projects_text">
              <p style={{ color: "#68acc5" }}>Description</p>
              <p>
                여행 장소 공유 플랫폼입니다.
                <br />
                주요 기능으로는 지도에 게시물 표시마크, 이미지 업로드, 게시물에 댓글 및 좋아요 서비스 등이 있습니다.
              </p>
              <div className="projects_do">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>What did i do</p>
                <p>
                  1. 아키텍처 설계 및 각종 페이지 디자인
                  <br />
                  2. Node.js와 Express.js를 사용하여 웹 서비스 및 API 서버 개발
                  <br />
                  3. MySQL를 데이터베이스로 사용
                  <br />
                  4. React.js를 사용하여 웹 UI/UX 개발
                  <br />
                  5. AWS상의 인프라 설계와 구축을 모두 담당하였으며 EC2, Route53, S3 등을 사용
                </p>
              </div>
              <div className="projects_stack">
                <p style={{ marginTop: "10px", color: "#68acc5" }}>Tech Stack</p>
                <p>React.js, Node.js, Express.js, MySQL, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
