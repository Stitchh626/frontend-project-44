#!/usr/bin/env node

import runGame from '../src/index.js';
import { getQuestionAndAnswer, gameDescription } from '../src/games/progression.js';

runGame(gameDescription, getQuestionAndAnswer);
