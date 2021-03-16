import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './style/style.scss';

const renderElement = document.getElementById('application');
render(<Router />, renderElement);
