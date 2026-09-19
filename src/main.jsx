import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlassDemo from './page/GlassDemo';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
	<>
		<GlassDemo />
	</>,
);
