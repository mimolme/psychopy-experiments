/*************************** 
 * Ass_Builder_Online *
 ***************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'ASS_builder_online';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(practice_introRoutineBegin());
flowScheduler.add(practice_introRoutineEachFrame());
flowScheduler.add(practice_introRoutineEnd());
const practiceLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practiceLoopLoopBegin(practiceLoopLoopScheduler));
flowScheduler.add(practiceLoopLoopScheduler);
flowScheduler.add(practiceLoopLoopEnd);



flowScheduler.add(main_introRoutineBegin());
flowScheduler.add(main_introRoutineEachFrame());
flowScheduler.add(main_introRoutineEnd());
const mainLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mainLoopLoopBegin(mainLoopLoopScheduler));
flowScheduler.add(mainLoopLoopScheduler);
flowScheduler.add(mainLoopLoopEnd);



flowScheduler.add(break_2RoutineBegin());
flowScheduler.add(break_2RoutineEachFrame());
flowScheduler.add(break_2RoutineEnd());
const mainLoop2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mainLoop2LoopBegin(mainLoop2LoopScheduler));
flowScheduler.add(mainLoop2LoopScheduler);
flowScheduler.add(mainLoop2LoopEnd);



flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice_conditions.csv', 'path': 'practice_conditions.csv'},
    {'name': 'stimuli/stim_df2_soa0.09.wav', 'path': 'stimuli/stim_df2_soa0.09.wav'},
    {'name': 'stimuli/stim_df2_soa0.12.wav', 'path': 'stimuli/stim_df2_soa0.12.wav'},
    {'name': 'stimuli/stim_df2_soa0.18.wav', 'path': 'stimuli/stim_df2_soa0.18.wav'},
    {'name': 'stimuli/stim_df4_soa0.09.wav', 'path': 'stimuli/stim_df4_soa0.09.wav'},
    {'name': 'stimuli/stim_df4_soa0.12.wav', 'path': 'stimuli/stim_df4_soa0.12.wav'},
    {'name': 'stimuli/stim_df4_soa0.18.wav', 'path': 'stimuli/stim_df4_soa0.18.wav'},
    {'name': 'stimuli/stim_df6_soa0.09.wav', 'path': 'stimuli/stim_df6_soa0.09.wav'},
    {'name': 'stimuli/stim_df6_soa0.12.wav', 'path': 'stimuli/stim_df6_soa0.12.wav'},
    {'name': 'stimuli/stim_df6_soa0.18.wav', 'path': 'stimuli/stim_df6_soa0.18.wav'},
    {'name': 'stimuli/stim_df8_soa0.09.wav', 'path': 'stimuli/stim_df8_soa0.09.wav'},
    {'name': 'stimuli/stim_df8_soa0.12.wav', 'path': 'stimuli/stim_df8_soa0.12.wav'},
    {'name': 'stimuli/stim_df8_soa0.18.wav', 'path': 'stimuli/stim_df8_soa0.18.wav'},
    {'name': 'stimuli/stim_df10_soa0.09.wav', 'path': 'stimuli/stim_df10_soa0.09.wav'},
    {'name': 'stimuli/stim_df10_soa0.12.wav', 'path': 'stimuli/stim_df10_soa0.12.wav'},
    {'name': 'stimuli/stim_df10_soa0.18.wav', 'path': 'stimuli/stim_df10_soa0.18.wav'},
    {'name': 'stimuli/stim_df12_soa0.09.wav', 'path': 'stimuli/stim_df12_soa0.09.wav'},
    {'name': 'stimuli/stim_df12_soa0.12.wav', 'path': 'stimuli/stim_df12_soa0.12.wav'},
    {'name': 'stimuli/stim_df12_soa0.18.wav', 'path': 'stimuli/stim_df12_soa0.18.wav'},
    {'name': 'main_conditions.csv', 'path': 'main_conditions.csv'},
    {'name': 'stimuli/stim_df2_soa0.09.wav', 'path': 'stimuli/stim_df2_soa0.09.wav'},
    {'name': 'stimuli/stim_df2_soa0.12.wav', 'path': 'stimuli/stim_df2_soa0.12.wav'},
    {'name': 'stimuli/stim_df2_soa0.18.wav', 'path': 'stimuli/stim_df2_soa0.18.wav'},
    {'name': 'stimuli/stim_df4_soa0.09.wav', 'path': 'stimuli/stim_df4_soa0.09.wav'},
    {'name': 'stimuli/stim_df4_soa0.12.wav', 'path': 'stimuli/stim_df4_soa0.12.wav'},
    {'name': 'stimuli/stim_df4_soa0.18.wav', 'path': 'stimuli/stim_df4_soa0.18.wav'},
    {'name': 'stimuli/stim_df6_soa0.09.wav', 'path': 'stimuli/stim_df6_soa0.09.wav'},
    {'name': 'stimuli/stim_df6_soa0.12.wav', 'path': 'stimuli/stim_df6_soa0.12.wav'},
    {'name': 'stimuli/stim_df6_soa0.18.wav', 'path': 'stimuli/stim_df6_soa0.18.wav'},
    {'name': 'stimuli/stim_df8_soa0.09.wav', 'path': 'stimuli/stim_df8_soa0.09.wav'},
    {'name': 'stimuli/stim_df8_soa0.12.wav', 'path': 'stimuli/stim_df8_soa0.12.wav'},
    {'name': 'stimuli/stim_df8_soa0.18.wav', 'path': 'stimuli/stim_df8_soa0.18.wav'},
    {'name': 'stimuli/stim_df10_soa0.09.wav', 'path': 'stimuli/stim_df10_soa0.09.wav'},
    {'name': 'stimuli/stim_df10_soa0.12.wav', 'path': 'stimuli/stim_df10_soa0.12.wav'},
    {'name': 'stimuli/stim_df10_soa0.18.wav', 'path': 'stimuli/stim_df10_soa0.18.wav'},
    {'name': 'stimuli/stim_df12_soa0.09.wav', 'path': 'stimuli/stim_df12_soa0.09.wav'},
    {'name': 'stimuli/stim_df12_soa0.12.wav', 'path': 'stimuli/stim_df12_soa0.12.wav'},
    {'name': 'stimuli/stim_df12_soa0.18.wav', 'path': 'stimuli/stim_df12_soa0.18.wav'},
    {'name': 'main_conditions.csv', 'path': 'main_conditions.csv'},
    {'name': 'stimuli/stim_df2_soa0.09.wav', 'path': 'stimuli/stim_df2_soa0.09.wav'},
    {'name': 'stimuli/stim_df2_soa0.12.wav', 'path': 'stimuli/stim_df2_soa0.12.wav'},
    {'name': 'stimuli/stim_df2_soa0.18.wav', 'path': 'stimuli/stim_df2_soa0.18.wav'},
    {'name': 'stimuli/stim_df4_soa0.09.wav', 'path': 'stimuli/stim_df4_soa0.09.wav'},
    {'name': 'stimuli/stim_df4_soa0.12.wav', 'path': 'stimuli/stim_df4_soa0.12.wav'},
    {'name': 'stimuli/stim_df4_soa0.18.wav', 'path': 'stimuli/stim_df4_soa0.18.wav'},
    {'name': 'stimuli/stim_df6_soa0.09.wav', 'path': 'stimuli/stim_df6_soa0.09.wav'},
    {'name': 'stimuli/stim_df6_soa0.12.wav', 'path': 'stimuli/stim_df6_soa0.12.wav'},
    {'name': 'stimuli/stim_df6_soa0.18.wav', 'path': 'stimuli/stim_df6_soa0.18.wav'},
    {'name': 'stimuli/stim_df8_soa0.09.wav', 'path': 'stimuli/stim_df8_soa0.09.wav'},
    {'name': 'stimuli/stim_df8_soa0.12.wav', 'path': 'stimuli/stim_df8_soa0.12.wav'},
    {'name': 'stimuli/stim_df8_soa0.18.wav', 'path': 'stimuli/stim_df8_soa0.18.wav'},
    {'name': 'stimuli/stim_df10_soa0.09.wav', 'path': 'stimuli/stim_df10_soa0.09.wav'},
    {'name': 'stimuli/stim_df10_soa0.12.wav', 'path': 'stimuli/stim_df10_soa0.12.wav'},
    {'name': 'stimuli/stim_df10_soa0.18.wav', 'path': 'stimuli/stim_df10_soa0.18.wav'},
    {'name': 'stimuli/stim_df12_soa0.09.wav', 'path': 'stimuli/stim_df12_soa0.09.wav'},
    {'name': 'stimuli/stim_df12_soa0.12.wav', 'path': 'stimuli/stim_df12_soa0.12.wav'},
    {'name': 'stimuli/stim_df12_soa0.18.wav', 'path': 'stimuli/stim_df12_soa0.18.wav'},
    {'name': 'main_conditions.csv', 'path': 'main_conditions.csv'},
    {'name': 'practice_conditions.csv', 'path': 'practice_conditions.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instrText;
var instrKey;
var practice_introClock;
var pracIntroText;
var pracIntroKey;
var practice_trial_soundClock;
var fixation;
var stimSound;
var practice_trial_responseClock;
var response;
var key_resp;
var main_introClock;
var main_text;
var start_key;
var main_trial_soundClock;
var fixation_2;
var stimSound_2;
var main_trial_responseClock;
var response_2;
var key_resp_2;
var break_2Clock;
var break_text;
var break_key;
var main_trial_sound2Clock;
var fixation_3;
var stimSound_3;
var main_trial_response2Clock;
var response_3;
var key_resp_3;
var thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: '本実験では、単純な音が聞こえます。\n音が再生された後に画面が切り替わります。\n\n聞こえ方を以下のいずれかで判断してください：\n\n1： 1つの音列として聞こえた\n2： 複数の音列として聞こえた\n\n可能な限り、速く直感的に\n1 または 2 を押してください。\n\nスペースキー で次の画面に遷移します。',
    font: 'Hiragino Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instrKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_intro"
  practice_introClock = new util.Clock();
  pracIntroText = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracIntroText',
    text: 'まずは練習をしましょう。\n\n準備ができたら\nスペースキー を押してください。',
    font: 'Hiragino Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pracIntroKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_trial_sound"
  practice_trial_soundClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  stimSound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  stimSound.setVolume(1.0);
  stimSound.isPlaying = false;
  stimSound.isFinished = false;
  // Initialize components for Routine "practice_trial_response"
  practice_trial_responseClock = new util.Clock();
  response = new visual.TextStim({
    win: psychoJS.window,
    name: 'response',
    text: 'どのように聞こえましたか？\n\n1： 1つの音列として聞こえた\n2： 複数の音列として聞こえた',
    font: 'Hiragino Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_intro"
  main_introClock = new util.Clock();
  main_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_text',
    text: '練習は終了です。\n続いて本番に移ります。\n\nスペースキー で開始してください。',
    font: 'Hiragino Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_trial_sound"
  main_trial_soundClock = new util.Clock();
  fixation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  stimSound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  stimSound_2.setVolume(1.0);
  stimSound_2.isPlaying = false;
  stimSound_2.isFinished = false;
  // Initialize components for Routine "main_trial_response"
  main_trial_responseClock = new util.Clock();
  response_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'response_2',
    text: 'どのように聞こえましたか？\n\n1： 1つの音列として聞こえた\n2： 複数の音列として聞こえた',
    font: 'Hiragino Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: '休憩です。\n実験の半分が終了しました。\n\n準備が整ったら\nスペースキーを 押してください。',
    font: 'Hiragino Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  break_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_trial_sound2"
  main_trial_sound2Clock = new util.Clock();
  fixation_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  stimSound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  stimSound_3.setVolume(1.0);
  stimSound_3.isPlaying = false;
  stimSound_3.isFinished = false;
  // Initialize components for Routine "main_trial_response2"
  main_trial_response2Clock = new util.Clock();
  response_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'response_3',
    text: 'どのように聞こえましたか？\n\n1： 1つの音列として聞こえた\n2： 複数の音列として聞こえた',
    font: 'Hiragino Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: '実験は終了です。お疲れ様でした =^^=',
    font: 'Hiragino Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var _instrKey_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    instrKey.keys = undefined;
    instrKey.rt = undefined;
    _instrKey_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instrText);
    instrComponents.push(instrKey);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }
    
    
    // if instrText is active this frame...
    if (instrText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instrKey* updates
    if (t >= 0.0 && instrKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrKey.tStart = t;  // (not accounting for frame time here)
      instrKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrKey.clearEvents(); });
    }
    
    // if instrKey is active this frame...
    if (instrKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrKey.getKeys({keyList: ['space','escape'], waitRelease: false});
      _instrKey_allKeys = _instrKey_allKeys.concat(theseKeys);
      if (_instrKey_allKeys.length > 0) {
        instrKey.keys = _instrKey_allKeys[_instrKey_allKeys.length - 1].name;  // just the last key pressed
        instrKey.rt = _instrKey_allKeys[_instrKey_allKeys.length - 1].rt;
        instrKey.duration = _instrKey_allKeys[_instrKey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instrKey.corr, level);
    }
    psychoJS.experiment.addData('instrKey.keys', instrKey.keys);
    if (typeof instrKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instrKey.rt', instrKey.rt);
        psychoJS.experiment.addData('instrKey.duration', instrKey.duration);
        routineTimer.reset();
        }
    
    instrKey.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_introMaxDurationReached;
var _pracIntroKey_allKeys;
var practice_introMaxDuration;
var practice_introComponents;
function practice_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_introClock.reset();
    routineTimer.reset();
    practice_introMaxDurationReached = false;
    // update component parameters for each repeat
    pracIntroKey.keys = undefined;
    pracIntroKey.rt = undefined;
    _pracIntroKey_allKeys = [];
    psychoJS.experiment.addData('practice_intro.started', globalClock.getTime());
    practice_introMaxDuration = null
    // keep track of which components have finished
    practice_introComponents = [];
    practice_introComponents.push(pracIntroText);
    practice_introComponents.push(pracIntroKey);
    
    for (const thisComponent of practice_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_intro' ---
    // get current time
    t = practice_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pracIntroText* updates
    if (t >= 0.0 && pracIntroText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracIntroText.tStart = t;  // (not accounting for frame time here)
      pracIntroText.frameNStart = frameN;  // exact frame index
      
      pracIntroText.setAutoDraw(true);
    }
    
    
    // if pracIntroText is active this frame...
    if (pracIntroText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pracIntroKey* updates
    if (t >= 0.0 && pracIntroKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracIntroKey.tStart = t;  // (not accounting for frame time here)
      pracIntroKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pracIntroKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pracIntroKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pracIntroKey.clearEvents(); });
    }
    
    // if pracIntroKey is active this frame...
    if (pracIntroKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = pracIntroKey.getKeys({keyList: ['space','escape'], waitRelease: false});
      _pracIntroKey_allKeys = _pracIntroKey_allKeys.concat(theseKeys);
      if (_pracIntroKey_allKeys.length > 0) {
        pracIntroKey.keys = _pracIntroKey_allKeys[_pracIntroKey_allKeys.length - 1].name;  // just the last key pressed
        pracIntroKey.rt = _pracIntroKey_allKeys[_pracIntroKey_allKeys.length - 1].rt;
        pracIntroKey.duration = _pracIntroKey_allKeys[_pracIntroKey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_intro' ---
    for (const thisComponent of practice_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(pracIntroKey.corr, level);
    }
    psychoJS.experiment.addData('pracIntroKey.keys', pracIntroKey.keys);
    if (typeof pracIntroKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pracIntroKey.rt', pracIntroKey.rt);
        psychoJS.experiment.addData('pracIntroKey.duration', pracIntroKey.duration);
        routineTimer.reset();
        }
    
    pracIntroKey.stop();
    // the Routine "practice_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practiceLoop;
function practiceLoopLoopBegin(practiceLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practiceLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_conditions.csv',
      seed: undefined, name: 'practiceLoop'
    });
    psychoJS.experiment.addLoop(practiceLoop); // add the loop to the experiment
    currentLoop = practiceLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPracticeLoop of practiceLoop) {
      snapshot = practiceLoop.getSnapshot();
      practiceLoopLoopScheduler.add(importConditions(snapshot));
      practiceLoopLoopScheduler.add(practice_trial_soundRoutineBegin(snapshot));
      practiceLoopLoopScheduler.add(practice_trial_soundRoutineEachFrame());
      practiceLoopLoopScheduler.add(practice_trial_soundRoutineEnd(snapshot));
      practiceLoopLoopScheduler.add(practice_trial_responseRoutineBegin(snapshot));
      practiceLoopLoopScheduler.add(practice_trial_responseRoutineEachFrame());
      practiceLoopLoopScheduler.add(practice_trial_responseRoutineEnd(snapshot));
      practiceLoopLoopScheduler.add(practiceLoopLoopEndIteration(practiceLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practiceLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var mainLoop;
function mainLoopLoopBegin(mainLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mainLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'main_conditions.csv',
      seed: undefined, name: 'mainLoop'
    });
    psychoJS.experiment.addLoop(mainLoop); // add the loop to the experiment
    currentLoop = mainLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMainLoop of mainLoop) {
      snapshot = mainLoop.getSnapshot();
      mainLoopLoopScheduler.add(importConditions(snapshot));
      mainLoopLoopScheduler.add(main_trial_soundRoutineBegin(snapshot));
      mainLoopLoopScheduler.add(main_trial_soundRoutineEachFrame());
      mainLoopLoopScheduler.add(main_trial_soundRoutineEnd(snapshot));
      mainLoopLoopScheduler.add(main_trial_responseRoutineBegin(snapshot));
      mainLoopLoopScheduler.add(main_trial_responseRoutineEachFrame());
      mainLoopLoopScheduler.add(main_trial_responseRoutineEnd(snapshot));
      mainLoopLoopScheduler.add(mainLoopLoopEndIteration(mainLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function mainLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mainLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mainLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var mainLoop2;
function mainLoop2LoopBegin(mainLoop2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mainLoop2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'main_conditions.csv',
      seed: undefined, name: 'mainLoop2'
    });
    psychoJS.experiment.addLoop(mainLoop2); // add the loop to the experiment
    currentLoop = mainLoop2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMainLoop2 of mainLoop2) {
      snapshot = mainLoop2.getSnapshot();
      mainLoop2LoopScheduler.add(importConditions(snapshot));
      mainLoop2LoopScheduler.add(main_trial_sound2RoutineBegin(snapshot));
      mainLoop2LoopScheduler.add(main_trial_sound2RoutineEachFrame());
      mainLoop2LoopScheduler.add(main_trial_sound2RoutineEnd(snapshot));
      mainLoop2LoopScheduler.add(main_trial_response2RoutineBegin(snapshot));
      mainLoop2LoopScheduler.add(main_trial_response2RoutineEachFrame());
      mainLoop2LoopScheduler.add(main_trial_response2RoutineEnd(snapshot));
      mainLoop2LoopScheduler.add(mainLoop2LoopEndIteration(mainLoop2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function mainLoop2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mainLoop2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mainLoop2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_trial_soundMaxDurationReached;
var practice_trial_soundMaxDuration;
var practice_trial_soundComponents;
function practice_trial_soundRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_trial_sound' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_trial_soundClock.reset();
    routineTimer.reset();
    practice_trial_soundMaxDurationReached = false;
    // update component parameters for each repeat
    stimSound.isFinished = false;
    stimSound.setValue(soundFile);
    stimSound.setVolume(1.0);
    psychoJS.experiment.addData('practice_trial_sound.started', globalClock.getTime());
    practice_trial_soundMaxDuration = null
    // keep track of which components have finished
    practice_trial_soundComponents = [];
    practice_trial_soundComponents.push(fixation);
    practice_trial_soundComponents.push(stimSound);
    
    for (const thisComponent of practice_trial_soundComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practice_trial_soundRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_trial_sound' ---
    // get current time
    t = practice_trial_soundClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation.tStop = t;  // not accounting for scr refresh
      fixation.frameNStop = frameN;  // exact frame index
      // update status
      fixation.status = PsychoJS.Status.FINISHED;
      fixation.setAutoDraw(false);
    }
    
    if (stimSound.status === STARTED) {
        stimSound.isPlaying = true;
        if (t >= (stimSound.getDuration() + stimSound.tStart)) {
            stimSound.isFinished = true;
        }
    }
    // start/stop stimSound
    if (t >= 0.8 && stimSound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimSound.tStart = t;  // (not accounting for frame time here)
      stimSound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ stimSound.play(); });  // screen flip
      stimSound.status = PsychoJS.Status.STARTED;
    }
    if (stimSound.status === PsychoJS.Status.STARTED && Boolean(false) || stimSound.isFinished) {
      // keep track of stop time/frame for later
      stimSound.tStop = t;  // not accounting for scr refresh
      stimSound.frameNStop = frameN;  // exact frame index
      // update status
      stimSound.status = PsychoJS.Status.FINISHED;
      // stop playback
      stimSound.stop();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_trial_soundComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trial_soundRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_trial_sound' ---
    for (const thisComponent of practice_trial_soundComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_trial_sound.stopped', globalClock.getTime());
    stimSound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "practice_trial_sound" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_trial_responseMaxDurationReached;
var _key_resp_allKeys;
var practice_trial_responseMaxDuration;
var practice_trial_responseComponents;
function practice_trial_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_trial_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_trial_responseClock.reset();
    routineTimer.reset();
    practice_trial_responseMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('practice_trial_response.started', globalClock.getTime());
    practice_trial_responseMaxDuration = null
    // keep track of which components have finished
    practice_trial_responseComponents = [];
    practice_trial_responseComponents.push(response);
    practice_trial_responseComponents.push(key_resp);
    
    for (const thisComponent of practice_trial_responseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_trial_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_trial_response' ---
    // get current time
    t = practice_trial_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response* updates
    if (t >= 0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      response.setAutoDraw(true);
    }
    
    
    // if response is active this frame...
    if (response.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1','2'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_trial_responseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trial_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_trial_response' ---
    for (const thisComponent of practice_trial_responseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_trial_response.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "practice_trial_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_introMaxDurationReached;
var _start_key_allKeys;
var main_introMaxDuration;
var main_introComponents;
function main_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_introClock.reset();
    routineTimer.reset();
    main_introMaxDurationReached = false;
    // update component parameters for each repeat
    start_key.keys = undefined;
    start_key.rt = undefined;
    _start_key_allKeys = [];
    psychoJS.experiment.addData('main_intro.started', globalClock.getTime());
    main_introMaxDuration = null
    // keep track of which components have finished
    main_introComponents = [];
    main_introComponents.push(main_text);
    main_introComponents.push(start_key);
    
    for (const thisComponent of main_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_intro' ---
    // get current time
    t = main_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_text* updates
    if (t >= 0 && main_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_text.tStart = t;  // (not accounting for frame time here)
      main_text.frameNStart = frameN;  // exact frame index
      
      main_text.setAutoDraw(true);
    }
    
    
    // if main_text is active this frame...
    if (main_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *start_key* updates
    if (t >= 0 && start_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_key.tStart = t;  // (not accounting for frame time here)
      start_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_key.clearEvents(); });
    }
    
    // if start_key is active this frame...
    if (start_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_key.getKeys({keyList: ['space','escape'], waitRelease: false});
      _start_key_allKeys = _start_key_allKeys.concat(theseKeys);
      if (_start_key_allKeys.length > 0) {
        start_key.keys = _start_key_allKeys[_start_key_allKeys.length - 1].name;  // just the last key pressed
        start_key.rt = _start_key_allKeys[_start_key_allKeys.length - 1].rt;
        start_key.duration = _start_key_allKeys[_start_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_intro' ---
    for (const thisComponent of main_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_key.corr, level);
    }
    psychoJS.experiment.addData('start_key.keys', start_key.keys);
    if (typeof start_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_key.rt', start_key.rt);
        psychoJS.experiment.addData('start_key.duration', start_key.duration);
        routineTimer.reset();
        }
    
    start_key.stop();
    // the Routine "main_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_trial_soundMaxDurationReached;
var main_trial_soundMaxDuration;
var main_trial_soundComponents;
function main_trial_soundRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_trial_sound' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_trial_soundClock.reset();
    routineTimer.reset();
    main_trial_soundMaxDurationReached = false;
    // update component parameters for each repeat
    stimSound_2.isFinished = false;
    stimSound_2.setValue(soundFile);
    stimSound_2.setVolume(1.0);
    psychoJS.experiment.addData('main_trial_sound.started', globalClock.getTime());
    main_trial_soundMaxDuration = null
    // keep track of which components have finished
    main_trial_soundComponents = [];
    main_trial_soundComponents.push(fixation_2);
    main_trial_soundComponents.push(stimSound_2);
    
    for (const thisComponent of main_trial_soundComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_trial_soundRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_trial_sound' ---
    // get current time
    t = main_trial_soundClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_2* updates
    if (t >= 0 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_2.tStart = t;  // (not accounting for frame time here)
      fixation_2.frameNStart = frameN;  // exact frame index
      
      fixation_2.setAutoDraw(true);
    }
    
    
    // if fixation_2 is active this frame...
    if (fixation_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_2.tStop = t;  // not accounting for scr refresh
      fixation_2.frameNStop = frameN;  // exact frame index
      // update status
      fixation_2.status = PsychoJS.Status.FINISHED;
      fixation_2.setAutoDraw(false);
    }
    
    if (stimSound_2.status === STARTED) {
        stimSound_2.isPlaying = true;
        if (t >= (stimSound_2.getDuration() + stimSound_2.tStart)) {
            stimSound_2.isFinished = true;
        }
    }
    // start/stop stimSound_2
    if (t >= 0.8 && stimSound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimSound_2.tStart = t;  // (not accounting for frame time here)
      stimSound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ stimSound_2.play(); });  // screen flip
      stimSound_2.status = PsychoJS.Status.STARTED;
    }
    if (stimSound_2.status === PsychoJS.Status.STARTED && Boolean(false) || stimSound_2.isFinished) {
      // keep track of stop time/frame for later
      stimSound_2.tStop = t;  // not accounting for scr refresh
      stimSound_2.frameNStop = frameN;  // exact frame index
      // update status
      stimSound_2.status = PsychoJS.Status.FINISHED;
      // stop playback
      stimSound_2.stop();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_trial_soundComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_trial_soundRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_trial_sound' ---
    for (const thisComponent of main_trial_soundComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_trial_sound.stopped', globalClock.getTime());
    stimSound_2.stop();  // ensure sound has stopped at end of Routine
    // the Routine "main_trial_sound" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_trial_responseMaxDurationReached;
var _key_resp_2_allKeys;
var main_trial_responseMaxDuration;
var main_trial_responseComponents;
function main_trial_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_trial_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_trial_responseClock.reset();
    routineTimer.reset();
    main_trial_responseMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('main_trial_response.started', globalClock.getTime());
    main_trial_responseMaxDuration = null
    // keep track of which components have finished
    main_trial_responseComponents = [];
    main_trial_responseComponents.push(response_2);
    main_trial_responseComponents.push(key_resp_2);
    
    for (const thisComponent of main_trial_responseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_trial_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_trial_response' ---
    // get current time
    t = main_trial_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response_2* updates
    if (t >= 0 && response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_2.tStart = t;  // (not accounting for frame time here)
      response_2.frameNStart = frameN;  // exact frame index
      
      response_2.setAutoDraw(true);
    }
    
    
    // if response_2 is active this frame...
    if (response_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['1','2'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_trial_responseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_trial_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_trial_response' ---
    for (const thisComponent of main_trial_responseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_trial_response.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "main_trial_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var break_2MaxDurationReached;
var _break_key_allKeys;
var break_2MaxDuration;
var break_2Components;
function break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'break_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    break_2Clock.reset();
    routineTimer.reset();
    break_2MaxDurationReached = false;
    // update component parameters for each repeat
    break_key.keys = undefined;
    break_key.rt = undefined;
    _break_key_allKeys = [];
    psychoJS.experiment.addData('break_2.started', globalClock.getTime());
    break_2MaxDuration = null
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(break_text);
    break_2Components.push(break_key);
    
    for (const thisComponent of break_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'break_2' ---
    // get current time
    t = break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }
    
    
    // if break_text is active this frame...
    if (break_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *break_key* updates
    if (t >= 0 && break_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_key.tStart = t;  // (not accounting for frame time here)
      break_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break_key.clearEvents(); });
    }
    
    // if break_key is active this frame...
    if (break_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = break_key.getKeys({keyList: ['space','escape'], waitRelease: false});
      _break_key_allKeys = _break_key_allKeys.concat(theseKeys);
      if (_break_key_allKeys.length > 0) {
        break_key.keys = _break_key_allKeys[_break_key_allKeys.length - 1].name;  // just the last key pressed
        break_key.rt = _break_key_allKeys[_break_key_allKeys.length - 1].rt;
        break_key.duration = _break_key_allKeys[_break_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'break_2' ---
    for (const thisComponent of break_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('break_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(break_key.corr, level);
    }
    psychoJS.experiment.addData('break_key.keys', break_key.keys);
    if (typeof break_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('break_key.rt', break_key.rt);
        psychoJS.experiment.addData('break_key.duration', break_key.duration);
        routineTimer.reset();
        }
    
    break_key.stop();
    // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_trial_sound2MaxDurationReached;
var main_trial_sound2MaxDuration;
var main_trial_sound2Components;
function main_trial_sound2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_trial_sound2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_trial_sound2Clock.reset();
    routineTimer.reset();
    main_trial_sound2MaxDurationReached = false;
    // update component parameters for each repeat
    stimSound_3.isFinished = false;
    stimSound_3.setValue(soundFile);
    stimSound_3.setVolume(1.0);
    psychoJS.experiment.addData('main_trial_sound2.started', globalClock.getTime());
    main_trial_sound2MaxDuration = null
    // keep track of which components have finished
    main_trial_sound2Components = [];
    main_trial_sound2Components.push(fixation_3);
    main_trial_sound2Components.push(stimSound_3);
    
    for (const thisComponent of main_trial_sound2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_trial_sound2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_trial_sound2' ---
    // get current time
    t = main_trial_sound2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_3* updates
    if (t >= 0 && fixation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_3.tStart = t;  // (not accounting for frame time here)
      fixation_3.frameNStart = frameN;  // exact frame index
      
      fixation_3.setAutoDraw(true);
    }
    
    
    // if fixation_3 is active this frame...
    if (fixation_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_3.tStop = t;  // not accounting for scr refresh
      fixation_3.frameNStop = frameN;  // exact frame index
      // update status
      fixation_3.status = PsychoJS.Status.FINISHED;
      fixation_3.setAutoDraw(false);
    }
    
    if (stimSound_3.status === STARTED) {
        stimSound_3.isPlaying = true;
        if (t >= (stimSound_3.getDuration() + stimSound_3.tStart)) {
            stimSound_3.isFinished = true;
        }
    }
    // start/stop stimSound_3
    if (t >= 0.8 && stimSound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimSound_3.tStart = t;  // (not accounting for frame time here)
      stimSound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ stimSound_3.play(); });  // screen flip
      stimSound_3.status = PsychoJS.Status.STARTED;
    }
    if (stimSound_3.status === PsychoJS.Status.STARTED && Boolean(false) || stimSound_3.isFinished) {
      // keep track of stop time/frame for later
      stimSound_3.tStop = t;  // not accounting for scr refresh
      stimSound_3.frameNStop = frameN;  // exact frame index
      // update status
      stimSound_3.status = PsychoJS.Status.FINISHED;
      // stop playback
      stimSound_3.stop();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_trial_sound2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_trial_sound2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_trial_sound2' ---
    for (const thisComponent of main_trial_sound2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_trial_sound2.stopped', globalClock.getTime());
    stimSound_3.stop();  // ensure sound has stopped at end of Routine
    // the Routine "main_trial_sound2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_trial_response2MaxDurationReached;
var _key_resp_3_allKeys;
var main_trial_response2MaxDuration;
var main_trial_response2Components;
function main_trial_response2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_trial_response2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_trial_response2Clock.reset();
    routineTimer.reset();
    main_trial_response2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('main_trial_response2.started', globalClock.getTime());
    main_trial_response2MaxDuration = null
    // keep track of which components have finished
    main_trial_response2Components = [];
    main_trial_response2Components.push(response_3);
    main_trial_response2Components.push(key_resp_3);
    
    for (const thisComponent of main_trial_response2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_trial_response2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_trial_response2' ---
    // get current time
    t = main_trial_response2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response_3* updates
    if (t >= 0 && response_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_3.tStart = t;  // (not accounting for frame time here)
      response_3.frameNStart = frameN;  // exact frame index
      
      response_3.setAutoDraw(true);
    }
    
    
    // if response_3 is active this frame...
    if (response_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['1','2'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_trial_response2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_trial_response2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_trial_response2' ---
    for (const thisComponent of main_trial_response2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_trial_response2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "main_trial_response2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    
    // if thanks_text is active this frame...
    if (thanks_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      thanks_text.tStop = t;  // not accounting for scr refresh
      thanks_text.frameNStop = frameN;  // exact frame index
      // update status
      thanks_text.status = PsychoJS.Status.FINISHED;
      thanks_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
