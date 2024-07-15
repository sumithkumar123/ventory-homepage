import '../styles/components/VentoryLogo.scss';
import ventoryFullLogo from '../assets/shared/full-logo.png';

export default function VentoryLogo() {

  return (
    <div className="ventory-logo">
      <img src={ventoryFullLogo} alt="ventory logo" />
    </div>
  );
}
