#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameDescription, getQuestionAndAnswer } from '../src/games/prime.js';

runGame(gameDescription, getQuestionAndAnswer);