import { GuideText, ProgressBar } from '@/components';
import SignUpForm1 from './SignUpForm1';

export default function SignUp() {
  return (
    <div className="flex flex-col gap-[2rem]">
      <GuideText text="부모님 먼저 가입한 후 아이도 회원가입할 수 있어요!" />
      <ProgressBar barGage={100 / 3} />
      <SignUpForm1 />
    </div>
  );
}