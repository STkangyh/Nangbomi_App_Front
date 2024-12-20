export default function Title() {
  return (
    <div className="mb-10">
      <div className="text-sm mb-2">냉보미를 시작해요</div>
      <div className="text-2xl font-bold">
        {window.location.pathname.includes("signup")
          ? "계정 생성하기"
          : "로그인할 계정 선택하기"}
      </div>
    </div>
  );
}
