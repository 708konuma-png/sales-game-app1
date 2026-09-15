(function () {
  "use strict";

  // ==========================================================
  // 設定データ (旧 data/scenario.js)
  // ==========================================================
  const scenario = {
    id: "standard-b2b-high",
    version: "1.0.0",
    title: "SALES CRISIS",
    subtitle: "売上1億円からの脱出",
    initial: {
      targetRevenue: 100000000,
      currentRevenue: 35000000,
      grossMarginRate: 32,
      grossProfit: 11200000,
      budget: 12000000,
      rp: 12,
      pipeline: 97000000,
      averageSatisfaction: 68,
      turn: 1,
      periodLabel: "残り12か月"
    },
    strategies: [
      { id: "protect-existing", label: "既存顧客を守る", description: "満足度と継続関係を優先する" },
      { id: "advance-large", label: "大型案件を進める", description: "大きな案件の進行に集中する" },
      { id: "create-new", label: "新規案件を増やす", description: "将来の案件の入口を増やす" },
      { id: "deepen-meeting", label: "重要商談を深める", description: "質問と提案の質を高める" },
      { id: "protect-margin", label: "粗利を守る", description: "値引きに頼らず収益を残す" },
      { id: "gather-information", label: "情報を集める", description: "判断材料を増やして次の一手を作る" }
    ],
    customers: [
      { id: "A", name: "北辰製造", size: "大企業", trait: "品質重視", relationship: "新規", amount: 20000000, satisfaction: 50, referral: "低", risk: "通常", priority: "高", linkedOpportunityId: "P-A", info: { issue: "生産性可視化", hiddenNeed: "経営会議で説明できる効果", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "強い競合" }, important: ["決裁者合意", "効果試算"], initialStage: "有望案件" },
      { id: "B", name: "青葉商事", size: "中堅", trait: "スピード重視", relationship: "新規", amount: 8000000, satisfaction: 55, referral: "中", risk: "通常", priority: "中", linkedOpportunityId: "P-B", info: { issue: "営業報告の迅速化", hiddenNeed: "未確認", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "中競合" }, important: ["導入開始日", "短期稼働"], initialStage: "商談中" },
      { id: "C", name: "東都物流", size: "大企業", trait: "課題解決重視", relationship: "既存", amount: 15000000, satisfaction: 74, referral: "高", risk: "通常", priority: "高", linkedOpportunityId: "P-C", info: { issue: "業務標準化", hiddenNeed: "部門間の抵抗を抑える", timing: "確認済み", budget: "未確認", decisionMaker: "未確認", competitor: "強い競合" }, important: ["利用部門合意", "稟議"], initialStage: "提案済み" },
      { id: "D", name: "みらい人材", size: "中堅", trait: "価格重視", relationship: "既存", amount: 7000000, satisfaction: 48, referral: "低", risk: "離反リスク", priority: "高", linkedOpportunityId: "P-D", info: { issue: "採用効率", hiddenNeed: "未確認", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "強い競合" }, important: ["値段", "短期効果"], initialStage: "保留" },
      { id: "E", name: "光洋金融", size: "大企業", trait: "品質重視", relationship: "既存", amount: 18000000, satisfaction: 82, referral: "高", risk: "通常", priority: "高", linkedOpportunityId: "P-E", info: { issue: "リスク管理", hiddenNeed: "未確認", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "強い競合" }, important: ["監査", "経営承認"], initialStage: "有望案件" },
      { id: "F", name: "西都医療", size: "中堅", trait: "関係性重視", relationship: "既存", amount: 9000000, satisfaction: 52, referral: "高", risk: "離反リスク", priority: "高", linkedOpportunityId: "P-F", info: { issue: "情報共有", hiddenNeed: "担当者の伴走", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "弱い競合" }, important: ["担当者信頼", "導入支援"], initialStage: "商談中" },
      { id: "G", name: "山手不動産", size: "中小", trait: "スピード重視", relationship: "新規", amount: 6000000, satisfaction: 50, referral: "中", risk: "通常", priority: "通常", linkedOpportunityId: null, info: { issue: "未確認", hiddenNeed: "即時導入", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "中競合" }, important: ["導入速度", "操作性"], initialStage: "リード" },
      { id: "H", name: "彩雲広告", size: "中小", trait: "課題解決重視", relationship: "新規", amount: 5000000, satisfaction: 50, referral: "高", risk: "通常", priority: "通常", linkedOpportunityId: null, info: { issue: "未確認", hiddenNeed: "経営者の納得", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "弱い競合" }, important: ["課題の明確化", "経営者の納得"], initialStage: "未接触" },
      { id: "I", name: "港南エネルギー", size: "大企業", trait: "投資対効果重視", relationship: "既存", amount: 16000000, satisfaction: 69, referral: "中", risk: "通常", priority: "高", linkedOpportunityId: "P-I", info: { issue: "コスト削減", hiddenNeed: "ROI証明", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "中競合" }, important: ["効果試算", "役員承認"], initialStage: "有望案件" },
      { id: "J", name: "ひかり教育", size: "中堅", trait: "価格重視", relationship: "休眠", amount: 6000000, satisfaction: 42, referral: "中", risk: "通常", priority: "通常", linkedOpportunityId: null, info: { issue: "未確認", hiddenNeed: "導入負担の低さ", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "強い競合" }, important: ["補助金", "低価格"], initialStage: "未接触" },
      { id: "K", name: "新都通信", size: "大企業", trait: "スピード重視", relationship: "新規", amount: 14000000, satisfaction: 50, referral: "低", risk: "通常", priority: "中", linkedOpportunityId: null, info: { issue: "問い合わせ対応", hiddenNeed: "短納期", timing: "未確認", budget: "未確認", decisionMaker: "未確認", competitor: "強い競合" }, important: ["先行導入", "体制"], initialStage: "リード" },
      { id: "L", name: "桜井食品", size: "中小", trait: "関係性重視", relationship: "既存", amount: 4000000, satisfaction: 77, referral: "高", risk: "通常", priority: "中", linkedOpportunityId: "P-L", info: { issue: "顧客管理", hiddenNeed: "相談相手", timing: "確認済み", budget: "未確認", decisionMaker: "未確認", competitor: "弱い競合" }, important: ["継続支援", "信頼"], initialStage: "提案済み" }
    ],
    opportunities: [
      { id: "P-A", customerId: "A", faceValue: 20000000, marginRate: 36, probability: 28, stage: "有望案件", remainingTurns: 3, requiredRP: 5, bottleneck: "効果試算・決裁者" },
      { id: "P-B", customerId: "B", faceValue: 8000000, marginRate: 30, probability: 42, stage: "商談中", remainingTurns: 2, requiredRP: 3, bottleneck: "導入時期" },
      { id: "P-C", customerId: "C", faceValue: 15000000, marginRate: 38, probability: 55, stage: "提案済み", remainingTurns: 1, requiredRP: 4, bottleneck: "稟議・部門合意" },
      { id: "P-D", customerId: "D", faceValue: 7000000, marginRate: 25, probability: 30, stage: "保留", remainingTurns: 1, requiredRP: 2, bottleneck: "価格・満足度" },
      { id: "P-E", customerId: "E", faceValue: 18000000, marginRate: 40, probability: 22, stage: "有望案件", remainingTurns: 3, requiredRP: 5, bottleneck: "監査・品質説明" },
      { id: "P-F", customerId: "F", faceValue: 9000000, marginRate: 32, probability: 46, stage: "商談中", remainingTurns: 2, requiredRP: 3, bottleneck: "関係性・伴走" },
      { id: "P-I", customerId: "I", faceValue: 16000000, marginRate: 35, probability: 38, stage: "有望案件", remainingTurns: 3, requiredRP: 4, bottleneck: "ROI・役員承認" },
      { id: "P-L", customerId: "L", faceValue: 4000000, marginRate: 33, probability: 60, stage: "提案済み", remainingTurns: 1, requiredRP: 2, bottleneck: "継続支援" }
    ],
    actions: [
      { id: "tele-appointment", name: "新規テレアポ", rp: 2, cost: 300000, timing: "短期", effect: "新規リード形成", risk: "低品質リードや放置の増加", target: "新規顧客" },
      { id: "existing-followup", name: "既存顧客フォロー", rp: 2, cost: 200000, timing: "短期", effect: "満足度・継続・追加受注", risk: "新規開拓の機会が減る", target: "既存顧客2社" },
      { id: "referral", name: "紹介営業", rp: 2, cost: 100000, timing: "中期", effect: "高品質リード形成", risk: "満足度70未満の顧客は対象外", target: "満足度の高い顧客" },
      { id: "exhibition", name: "展示会", rp: 4, cost: 1500000, timing: "中期", effect: "複数リード形成", risk: "費用先行", target: "新規市場" },
      { id: "web-marketing", name: "Webマーケティング", rp: 2, cost: 1000000, timing: "中長期", effect: "継続的なリード形成", risk: "今Turnの売上にはつながりにくい", target: "新規市場" },
      { id: "large-focus", name: "大型案件への集中", rp: 4, cost: 400000, timing: "短期", effect: "対象案件の進行・確度向上", risk: "他案件の対応遅延", target: "有望案件以上" },
      { id: "reactivate", name: "休眠顧客掘り起こし", rp: 2, cost: 250000, timing: "中期", effect: "休眠顧客の再活性化", risk: "古い情報や反応なし", target: "休眠顧客" },
      { id: "training", name: "営業研修", rp: 2, cost: 800000, timing: "中長期", effect: "営業品質・生産性向上", risk: "今Turnの活動量が減る", target: "営業チーム" },
      { id: "meeting-prep", name: "商談準備", rp: 1, cost: 100000, timing: "短期", effect: "受注見込み・粗利保護", risk: "対象案件ごとに営業力を使う", target: "案件ごと" },
      { id: "hearing", name: "顧客ヒアリング", rp: 1, cost: 100000, timing: "短期", effect: "情報開示・適合度向上", risk: "質問の選び方が重要", target: "案件ごと" }
    ],
    questions: [
      { id: "current-issue", label: "現在の課題", purpose: "現場が困っていることを確認する", score: 6, fields: ["issue"] },
      { id: "root-cause", label: "課題の原因", purpose: "根本原因や業務構造を確認する", score: 8, fields: ["hiddenNeed"] },
      { id: "budget", label: "予算", purpose: "投資可能な範囲を確認する", score: 5, fields: ["budget"] },
      { id: "decision-maker", label: "決裁者", purpose: "誰が最終判断するか確認する", score: 8, fields: ["decisionMaker"] },
      { id: "timing", label: "導入時期", purpose: "いつまでに必要か確認する", score: 6, fields: ["timing"] },
      { id: "competitor", label: "競合", purpose: "比較対象と失注要因を確認する", score: 5, fields: ["competitor"] },
      { id: "ideal-state", label: "理想状態", purpose: "導入後にどうなれば成功か確認する", score: 8, fields: ["hiddenNeed"] },
      { id: "past-failure", label: "過去の失敗", purpose: "不信や避けるべきことを確認する", score: 7, fields: ["pastFailure"] }
    ],
    proposals: ["価格", "品質", "課題解決", "スピード", "関係性", "投資対効果"],
    nextActions: ["決裁者同席", "効果試算", "追加ヒアリング", "提案書修正", "導入計画", "保留"],
    pricing: [
      { rate: 0, label: "定価", probability: 0, margin: 0, satisfaction: 2 },
      { rate: 0.05, label: "5%値引き", probability: 5, margin: -5, satisfaction: 1 },
      { rate: 0.1, label: "10%値引き", probability: 9, margin: -10, satisfaction: 0 },
      { rate: 0.2, label: "20%値引き", probability: 12, margin: -25, satisfaction: -4 }
    ],
    disclosure: { defaultLevel: 0, hearingLevel: 2, meetingLevel: 2 }
  };

  // ==========================================================
  // 保存処理 (旧 js/storage.js)
  // ==========================================================
  const ACTIVE_GAME_KEY = "salesCrisis.activeGame";

  function loadGame() {
    try {
      const saved = localStorage.getItem(ACTIVE_GAME_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

  function saveGame(gameState) {
    try {
      localStorage.setItem(ACTIVE_GAME_KEY, JSON.stringify(gameState));
      return true;
    } catch {
      return false;
    }
  }

  function clearGame() {
    localStorage.removeItem(ACTIVE_GAME_KEY);
  }

  // ==========================================================
  // ゲームロジック (旧 js/gameEngine.js)
  // ==========================================================
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const deepCopy = (value) => JSON.parse(JSON.stringify(value));

  function createInitialState() {
    const initialKpis = createKpis();
    const customers = scenario.customers.map((customer) => ({
      ...deepCopy(customer),
      disclosureLevel: scenario.disclosure.defaultLevel,
      disclosedFields: ["issue", "hiddenNeed"].filter((field) => customer.info[field] !== "未確認" && field === "issue"),
      viewed: false,
      contactThisTurn: false,
      satisfactionBefore: customer.satisfaction
    }));
    const opportunities = scenario.opportunities.map((opportunity) => ({
      ...deepCopy(opportunity),
      baseProbability: opportunity.probability,
      probability: opportunity.probability,
      preparation: false,
      hearing: false,
      questions: [],
      proposal: null,
      outcome: null,
      actualRevenue: 0,
      realizedMargin: 0,
      neglectedTurns: 0
    }));
    return {
      schemaVersion: "1.0.0",
      gameId: `game-${Date.now()}`,
      scenarioId: scenario.id,
      status: "playing",
      screen: "mission",
      currentTurn: 1,
      turnConfirmed: false,
      selectedStrategy: null,
      priorityCustomerIds: [],
      selectedActions: [],
      meetings: [],
      events: [],
      rationaleTags: [],
      rationaleText: "",
      impactLog: [],
      informationDisclosure: [],
      uiErrors: {},
      customers,
      opportunities,
      kpis: initialKpis,
      turnBefore: deepCopy(initialKpis),
      turnResult: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  function createKpis() {
    return {
      totalRevenue: scenario.initial.currentRevenue,
      targetRevenue: scenario.initial.targetRevenue,
      remainingRevenue: scenario.initial.targetRevenue - scenario.initial.currentRevenue,
      grossProfit: scenario.initial.grossProfit,
      grossMarginRate: scenario.initial.grossMarginRate,
      budget: scenario.initial.budget,
      rp: scenario.initial.rp,
      satisfaction: scenario.initial.averageSatisfaction,
      pipeline: scenario.initial.pipeline,
      usedRP: 0,
      usedBudget: 0
    };
  }

  function formatMoney(value) {
    return `${Math.round(value / 10000).toLocaleString("ja-JP")}万円`;
  }

  function formatYen(value) {
    return `${Math.round(value).toLocaleString("ja-JP")}円`;
  }

  function satisfactionLabel(value) {
    if (value >= 75) return "良好";
    if (value >= 60) return "安定";
    if (value >= 45) return "注意";
    return "要対応";
  }

  function probabilityBand(value) {
    if (value >= 80) return "非常に高い";
    if (value >= 60) return "高い";
    if (value >= 40) return "中";
    if (value >= 20) return "低い";
    return "非常に低い";
  }

  function selectStrategy(state, strategyId) {
    state.selectedStrategy = strategyId;
    touch(state);
  }

  function togglePriorityCustomer(state, customerId) {
    const index = state.priorityCustomerIds.indexOf(customerId);
    if (index >= 0) state.priorityCustomerIds.splice(index, 1);
    else if (state.priorityCustomerIds.length < 3) state.priorityCustomerIds.push(customerId);
    touch(state);
  }

  function getActionById(actionId) {
    return scenario.actions.find((action) => action.id === actionId);
  }

  function canSelectAction(state, actionId) {
    if (state.selectedActions.length >= 5) return { ok: false, reason: "営業施策は最大5件までです。" };
    const action = getActionById(actionId);
    if (!action) return { ok: false, reason: "施策が見つかりません。" };
    const count = state.selectedActions.filter((item) => item.actionId === actionId).length;
    if (count >= (action.id === "meeting-prep" || action.id === "hearing" ? 2 : 1)) return { ok: false, reason: "この施策のTurn1での選択上限に達しています。" };
    if (state.kpis.rp - action.rp < 0) return { ok: false, reason: "営業力が不足しています。" };
    if (state.kpis.budget - action.cost < 0) return { ok: false, reason: "予算が不足しています。" };
    if (actionId === "referral" && !state.customers.some((customer) => customer.satisfaction >= 70)) return { ok: false, reason: "紹介元になれる満足度70以上の顧客がいません。" };
    return { ok: true };
  }

  function addAction(state, actionId, targetId = null) {
    const validation = canSelectAction(state, actionId);
    if (!validation.ok) return validation;
    const action = getActionById(actionId);
    state.selectedActions.push({ actionId, targetId, rp: action.rp, cost: action.cost });
    state.kpis.rp -= action.rp;
    state.kpis.budget -= action.cost;
    state.kpis.usedRP += action.rp;
    state.kpis.usedBudget += action.cost;
    touch(state);
    return { ok: true };
  }

  function removeAction(state, index) {
    const selected = state.selectedActions[index];
    if (!selected) return;
    state.kpis.rp += selected.rp;
    state.kpis.budget += selected.cost;
    state.kpis.usedRP -= selected.rp;
    state.kpis.usedBudget -= selected.cost;
    state.selectedActions.splice(index, 1);
    touch(state);
  }

  function openCustomer(state, customerId) {
    const customer = state.customers.find((item) => item.id === customerId);
    if (customer) {
      customer.viewed = true;
      touch(state);
    }
  }

  function prepareMeeting(state, opportunityId) {
    const opportunity = state.opportunities.find((item) => item.id === opportunityId);
    if (!opportunity) return { ok: false, reason: "案件が見つかりません。" };
    const existing = state.meetings.find((meeting) => meeting.opportunityId === opportunityId);
    if (existing) return { ok: true, meeting: existing };
    if (state.meetings.length >= 2) return { ok: false, reason: "Turn1の商談は最大2案件です。" };
    const meeting = { meetingId: `meeting-${opportunityId}`, opportunityId, questionIds: [], primaryProposal: "", secondaryProposal: "なし", pricingRate: 0, nextAction: "", reaction: "" };
    state.meetings.push(meeting);
    touch(state);
    return { ok: true, meeting };
  }

  function updateMeeting(state, opportunityId, patch) {
    const meeting = state.meetings.find((item) => item.opportunityId === opportunityId);
    if (!meeting) return;
    Object.assign(meeting, patch);
    const opportunity = state.opportunities.find((item) => item.id === opportunityId);
    if (opportunity) {
      opportunity.questions = meeting.questionIds;
      opportunity.proposal = { primary: meeting.primaryProposal, secondary: meeting.secondaryProposal, pricingRate: meeting.pricingRate, nextAction: meeting.nextAction };
    }
    touch(state);
  }

  function toggleQuestion(state, opportunityId, questionId) {
    const meeting = state.meetings.find((item) => item.opportunityId === opportunityId);
    if (!meeting) return;
    const index = meeting.questionIds.indexOf(questionId);
    if (index >= 0) meeting.questionIds.splice(index, 1);
    else if (meeting.questionIds.length < 3) meeting.questionIds.push(questionId);
    updateMeeting(state, opportunityId, { questionIds: meeting.questionIds });
  }

  function getMeetingReaction(state, opportunityId) {
    const meeting = state.meetings.find((item) => item.opportunityId === opportunityId);
    if (!meeting) return "商談内容を入力すると顧客の反応が表示されます。";
    if (meeting.pricingRate >= .1) return "価格について懸念が示されています。";
    if (meeting.questionIds.includes("decision-maker")) return "決裁条件について、次回の関係者整理が必要になりました。";
    if (meeting.questionIds.includes("ideal-state") || meeting.primaryProposal === "投資対効果") return "導入効果について、より具体的な説明を求められています。";
    if (meeting.primaryProposal === "スピード") return "導入時期への関心が高まっています。";
    return "提案内容を社内で確認し、次回の進め方を相談する流れです。";
  }

  function setRationale(state, tags, text) {
    state.rationaleTags = tags.slice(0, 2);
    state.rationaleText = text.slice(0, 140);
    touch(state);
  }

  function clearUiError(state, key) {
    if (state.uiErrors?.[key]) {
      delete state.uiErrors[key];
      touch(state);
    }
  }

  function validateCurrentStep(state, step) {
    const messages = {
      strategy: state.selectedStrategy ? [] : ["重点方針を1つ選択してください。今回の2か月で何を優先するか決めましょう。"],
      priority: state.priorityCustomerIds.length ? [] : ["重点顧客を最低1社選択してください。限られた営業力を誰に使うのか決めましょう。"],
      actions: [
        ...(state.selectedActions.length ? [] : ["営業施策を最低1つ選択してください。"]),
        ...(state.kpis.usedRP >= 3 ? [] : [`営業力をあと${3 - state.kpis.usedRP}RP以上使用してください。`])
      ],
      rationale: state.rationaleTags.length ? [] : ["今回この営業方針を選んだ理由を1つ以上選択してください。"]
    };
    const errors = messages[step] || [];
    if (!state.uiErrors) state.uiErrors = {};
    state.uiErrors[step] = errors;
    touch(state);
    return { ok: errors.length === 0, errors };
  }

  function refreshStepError(state, key) {
    if (state.uiErrors?.[key]?.length) {
      validateCurrentStep(state, key);
    }
  }

  function validateTurnDecision(state) {
    const missing = [];
    if (!state.selectedStrategy) missing.push("重点方針を1つ選択してください");
    if (state.priorityCustomerIds.length < 1) missing.push("重点顧客を1社以上選択してください");
    if (state.selectedActions.length < 1) missing.push("営業施策を1つ以上選択してください");
    if (state.kpis.usedRP < 3) missing.push(`営業力をあと${3 - state.kpis.usedRP}ポイント以上使用してください`);
    if (state.rationaleTags.length < 1) missing.push("意思決定理由タグを1つ以上選択してください");
    return { ok: missing.length === 0, missing, remainingRP: state.kpis.rp };
  }

  function addImpact(state, impact) {
    state.impactLog.push({ turn: state.currentTurn, ...impact });
  }

  function revealInformation(state, opportunity, questionIds) {
    const customer = state.customers.find((item) => item.id === opportunity.customerId);
    questionIds.forEach((questionId) => {
      const question = scenario.questions.find((item) => item.id === questionId);
      question?.fields.forEach((field) => {
        const value = customer.info[field];
        if (value && value !== "未確認" && !customer.disclosedFields.includes(field)) {
          customer.disclosedFields.push(field);
          state.informationDisclosure.push({ turn: state.currentTurn, opportunityId: opportunity.id, customerId: customer.id, field, value });
          addImpact(state, { type: "information", opportunityId: opportunity.id, customerId: customer.id, cause: "customer_interview", field, value });
        }
      });
    });
  }

  function applyActionEffects(state) {
    const effects = [];
    for (const selected of state.selectedActions) {
      const action = getActionById(selected.actionId);
      if (!action) continue;
      if (action.id === "existing-followup") {
        const targets = selected.targetId ? [selected.targetId] : ["D", "F"];
        targets.slice(0, 2).forEach((id) => {
          const customer = state.customers.find((item) => item.id === id);
          if (customer) {
            const before = customer.satisfaction;
            customer.satisfaction = clamp(customer.satisfaction + 4, 0, 100);
            customer.contactThisTurn = true;
            addImpact(state, { type: "customer_satisfaction", customerId: id, before, after: customer.satisfaction, delta: customer.satisfaction - before, cause: "existing_customer_followup" });
          }
        });
        effects.push("既存顧客の満足度をフォローしました。");
      }
      if (action.id === "large-focus") {
        const opportunityId = selected.targetId || state.meetings[0]?.opportunityId;
        const opportunity = state.opportunities.find((item) => item.id === opportunityId);
        if (opportunity && ["有望案件", "商談中", "提案済み"].includes(opportunity.stage)) {
          opportunity.probability = clamp(opportunity.probability + 8, 0, 100);
          opportunity.stage = opportunity.stage === "有望案件" ? "商談中" : opportunity.stage;
          addImpact(state, { type: "opportunity_progress", opportunityId, before: opportunity.probability - 8, after: opportunity.probability, cause: "large_deal_focus" });
          effects.push(`${opportunityId}の進行と受注見込みを高めました。`);
        }
      }
      if (action.id === "tele-appointment") {
        const lead = state.customers.find((customer) => ["G", "H", "K"].includes(customer.id));
        if (lead) { lead.disclosureLevel = Math.max(lead.disclosureLevel, 1); lead.info.issue = lead.id === "G" ? "顧客対応の標準化" : lead.info.issue; effects.push("新規顧客への接点を作りました。"); }
      }
      if (action.id === "referral") {
        const source = state.customers.find((customer) => customer.satisfaction >= 70);
        if (source) effects.push(`${source.name}からの紹介可能性を確認しました。`);
      }
      if (action.id === "reactivate") {
        const customer = state.customers.find((item) => item.relationship === "休眠");
        if (customer) { customer.disclosureLevel = 1; effects.push(`${customer.name}の再接触を開始しました。`); }
      }
      if (action.id === "meeting-prep") {
        const opportunityId = selected.targetId || state.meetings[0]?.opportunityId;
        const opportunity = state.opportunities.find((item) => item.id === opportunityId);
        if (opportunity) { const before = opportunity.probability; opportunity.preparation = true; opportunity.probability = clamp(opportunity.probability + 10, 0, 100); addImpact(state, { type: "opportunity_probability", opportunityId, before, after: opportunity.probability, cause: "meeting_preparation" }); effects.push(`${opportunityId}の商談準備を行いました。`); }
      }
      if (action.id === "hearing") {
        const opportunityId = selected.targetId || state.meetings[0]?.opportunityId;
        const opportunity = state.opportunities.find((item) => item.id === opportunityId);
        if (opportunity) { const before = opportunity.probability; opportunity.hearing = true; opportunity.probability = clamp(opportunity.probability + 8, 0, 100); addImpact(state, { type: "opportunity_probability", opportunityId, before, after: opportunity.probability, cause: "customer_hearing" }); effects.push(`${opportunityId}の顧客情報を深掘りしました。`); }
      }
    }
    return effects;
  }

  function evaluateMeeting(state, meeting) {
    const opportunity = state.opportunities.find((item) => item.id === meeting.opportunityId);
    const customer = state.customers.find((item) => item.id === opportunity.customerId);
    const questionScore = meeting.questionIds.reduce((sum, id) => sum + (scenario.questions.find((question) => question.id === id)?.score || 0), 0);
    const customerFit = customer.trait === "価格重視" && meeting.primaryProposal === "価格" ? 18 : customer.trait === "品質重視" && meeting.primaryProposal === "品質" ? 18 : customer.trait === "関係性重視" && meeting.primaryProposal === "関係性" ? 18 : customer.trait === "スピード重視" && meeting.primaryProposal === "スピード" ? 18 : customer.trait === "課題解決重視" && meeting.primaryProposal === "課題解決" ? 18 : meeting.primaryProposal ? 4 : 0;
    const hearingBonus = opportunity.hearing ? Math.min(20, Math.round((questionScore + 8) / 2)) : Math.min(20, Math.round(questionScore / 2));
    const proposalFit = clamp(Math.round((customerFit + (opportunity.hearing && meeting.primaryProposal === "課題解決" ? 8 : 0) + Math.min(12, questionScore / 2) + (opportunity.preparation ? 10 : 0)) / 3), 0, 20);
    const relationshipBonus = customer.satisfaction < 40 ? -8 : customer.satisfaction < 60 ? -3 : customer.satisfaction < 80 ? 3 : 8;
    const pricing = scenario.pricing.find((item) => item.rate === meeting.pricingRate) || scenario.pricing[0];
    let probability = opportunity.probability + hearingBonus + proposalFit + (opportunity.preparation ? 10 : 0) + relationshipBonus + pricing.probability;
    if (!opportunity.hearing && meeting.primaryProposal === "課題解決") probability -= 8;
    if (meeting.nextAction === "保留") probability -= 4;
    probability = clamp(Math.round(probability), 0, 100);
    const random = Math.floor(Math.random() * 21) - 10;
    const finalValue = probability * .8 + (50 + random) * .2;
    const outcome = finalValue >= 55 ? "受注" : finalValue >= 40 ? "保留" : "失注";
    const actualRevenue = outcome === "受注" ? Math.round(opportunity.faceValue * (1 - meeting.pricingRate)) : 0;
    const marginRate = clamp(opportunity.marginRate + pricing.margin, 0, 100);
    const realizedMargin = outcome === "受注" ? Math.round(actualRevenue * marginRate / 100) : 0;
    const satisfactionChange = outcome === "受注" ? pricing.satisfaction + (proposalFit >= 12 ? 2 : 0) : outcome === "失注" ? -3 : 0;
    return { probability, outcome, actualRevenue, realizedMargin, satisfactionChange, random, questionScore, proposalFit };
  }

  function resolveTurn(state) {
    if (state.turnConfirmed) return { ok: false, reason: "このTurnはすでに確定しています。" };
    const validation = validateTurnDecision(state);
    if (!validation.ok) return { ok: false, reason: "Turnを進めるには、以下の意思決定が必要です:\n・" + validation.missing.join("\n・"), validation };
    state.turnBefore = state.turnBefore || deepCopy(state.kpis);
    state.impactLog = [];
    state.informationDisclosure = [];
    const actionEffects = applyActionEffects(state);
    const outcomes = [];
    for (const meeting of state.meetings) {
      const opportunity = state.opportunities.find((item) => item.id === meeting.opportunityId);
      const probabilityBeforeMeeting = opportunity.probability;
      revealInformation(state, opportunity, meeting.questionIds);
      const result = evaluateMeeting(state, meeting);
      meeting.reaction = getMeetingReaction(state, meeting.opportunityId);
      meeting.result = { outcome: result.outcome, actualRevenue: result.actualRevenue, realizedMargin: result.realizedMargin, probabilityBand: probabilityBand(result.probability) };
      opportunity.probability = result.probability;
      opportunity.outcome = result.outcome;
      opportunity.actualRevenue = result.actualRevenue;
      opportunity.realizedMargin = result.realizedMargin;
      if (result.outcome === "受注") opportunity.stage = "受注";
      if (result.outcome === "失注") opportunity.stage = "失注";
      if (result.outcome === "保留") { opportunity.stage = "保留"; opportunity.probability = clamp(opportunity.probability - 5, 0, 100); }
      const customer = state.customers.find((item) => item.id === opportunity.customerId);
      customer.satisfaction = clamp(customer.satisfaction + result.satisfactionChange, 0, 100);
      addImpact(state, { type: "meeting_outcome", opportunityId: opportunity.id, customerId: customer.id, before: probabilityBeforeMeeting, after: result.probability, cause: "meeting_decision", outcome: result.outcome, revenue: result.actualRevenue, discountRate: meeting.pricingRate });
      customer.contactThisTurn = true;
      outcomes.push({ opportunityId: opportunity.id, customerId: customer.id, outcome: result.outcome, revenue: result.actualRevenue, margin: result.realizedMargin, probabilityBand: probabilityBand(result.probability), discountRate: meeting.pricingRate });
    }
    for (const customer of state.customers) {
      if (!customer.contactThisTurn && customer.relationship === "既存") {
        const before = customer.satisfaction;
        customer.satisfaction = clamp(customer.satisfaction - 3, 0, 100);
        addImpact(state, { type: "customer_satisfaction", customerId: customer.id, before, after: customer.satisfaction, delta: customer.satisfaction - before, cause: "neglected_existing_customer" });
      }
    }
    const revenueGain = outcomes.reduce((sum, item) => sum + item.revenue, 0);
    const marginGain = outcomes.reduce((sum, item) => sum + item.margin, 0);
    state.kpis.totalRevenue += revenueGain;
    state.kpis.remainingRevenue = Math.max(0, state.kpis.targetRevenue - state.kpis.totalRevenue);
    state.kpis.grossProfit += marginGain;
    state.kpis.grossMarginRate = state.kpis.totalRevenue ? Math.round(state.kpis.grossProfit / state.kpis.totalRevenue * 1000) / 10 : 0;
    state.kpis.satisfaction = Math.round(state.customers.reduce((sum, customer) => sum + customer.satisfaction, 0) / state.customers.length);
    state.kpis.pipeline = state.opportunities.filter((item) => !["受注", "失注"].includes(item.stage)).reduce((sum, item) => sum + item.faceValue, 0);
    state.turnConfirmed = true;
    state.turnResult = { outcomes, actionEffects, before: state.turnBefore, after: deepCopy(state.kpis), impactLog: deepCopy(state.impactLog), informationDisclosure: deepCopy(state.informationDisclosure), resolvedAt: new Date().toISOString() };
    state.turnResult.feedback = generateTurnFeedback(state);
    state.screen = "result";
    state.updatedAt = new Date().toISOString();
    return { ok: true };
  }

  function generateTurnFeedback(state) {
    const result = state.turnResult || { outcomes: [], actionEffects: [], before: state.turnBefore, after: state.kpis, impactLog: state.impactLog, informationDisclosure: state.informationDisclosure };
    const customerName = (id) => state.customers.find((customer) => customer.id === id)?.name || id;
    const opportunityName = (id) => id;
    const followupCount = state.selectedActions.filter((item) => item.actionId === "existing-followup").length;
    const hasInformation = result.informationDisclosure.length > 0;
    const received = result.outcomes.filter((item) => item.outcome === "受注");
    const neglected = result.impactLog.filter((item) => item.cause === "neglected_existing_customer");
    const strategy = scenario.strategies.find((item) => item.id === state.selectedStrategy)?.label || "営業活動";
    const summary = `${strategy}を優先し、${state.selectedActions.length}件の施策${state.meetings.length ? `と${state.meetings.length}件の商談` : ""}を実行しました。${received.length ? `${received.map((item) => `${item.opportunityId}を受注`).join("、")}しましたが、` : ""}${neglected.length ? `${neglected.length}社の既存顧客を十分にフォローできず、満足度に影響が出ています。` : hasInformation ? "情報を増やし、次の提案材料を得ました。" : "今回の選択が案件と顧客状態に反映されています。"}`;
    const actionNames = state.selectedActions.map((item) => getActionById(item.actionId)?.name).filter(Boolean);
    const causes = result.impactLog.filter((item) => ["meeting_outcome", "opportunity_probability", "opportunity_progress", "customer_satisfaction"].includes(item.type)).slice(0, 3).map((item) => {
      if (item.type === "customer_satisfaction") {
        const customer = customerName(item.customerId);
        return { title: `${customer}への顧客対応`, body: item.cause === "existing_customer_followup" ? `${customer}への既存顧客フォローを選択したため、不満や課題を確認する接点ができました。その結果、満足度が${item.before}から${item.after}へ変化しました。` : `${actionNames.join("・") || "他の営業活動"}を優先したため、${customer}へのフォローを行いませんでした。その結果、関係性が低下し、満足度が${item.before}から${item.after}へ変化しました。` };
      }
      const opportunity = state.opportunities.find((entry) => entry.id === item.opportunityId);
      const amount = opportunity ? formatMoney(opportunity.faceValue) : "案件";
      if (item.type === "meeting_outcome") {
        const discountText = item.discountRate ? ` ${item.discountRate * 100}%値引きで価格抵抗を下げましたが、粗利は定価より低くなります。` : "";
        return { title: `${item.opportunityId}への商談判断`, body: `${item.opportunityId}（${amount}）に対して質問・提案・価格を選択したため、顧客の判断材料が整理されました。その結果、受注見込みは「${probabilityBand(item.before)}」から「${probabilityBand(item.after)}」となり、${item.outcome === "受注" ? `${formatMoney(item.revenue)}の受注につながりました。` : `${item.outcome}となりました。`}${discountText}` };
      }
      return { title: `${item.opportunityId}への営業力配分`, body: `${item.cause === "customer_hearing" ? "顧客ヒアリングで課題情報を取得したため" : item.cause === "meeting_preparation" ? "商談準備で顧客情報を整理したため" : "大型案件への集中を選択したため"}、${item.opportunityId}（${amount}）の提案・進行に使える材料が増えました。その結果、受注見込みは「${probabilityBand(item.before)}」から「${probabilityBand(item.after)}」へ変化しました。` };
    });
    const gains = [];
    received.slice(0, 2).forEach((item) => gains.push({ title: `${item.opportunityId}の売上`, body: `${formatMoney(item.revenue)}を計上しました。` }));
    if (hasInformation) gains.push({ title: "新しい顧客情報", body: `${result.informationDisclosure.slice(0, 2).map((item) => `${item.opportunityId}の${item.field}`).join("、")}を確認しました。` });
    if (followupCount) gains.push({ title: "既存顧客フォロー", body: "既存顧客との接点を作り、満足度低下を抑える活動を行いました。" });
    const tradeoffs = [];
    neglected.slice(0, 2).forEach((item) => tradeoffs.push({ title: `${customerName(item.customerId)}への対応不足`, body: `他の活動を優先したため、満足度が${item.before}から${item.after}へ変化しました。` }));
    if (!state.meetings.length) tradeoffs.push({ title: "商談を行わない判断", body: "情報収集や顧客対応に営業力を使ったため、Turn1の受注判定はありません。" });
    const warnings = neglected.slice(0, 2).map((item) => ({ label: "WARNING", title: customerName(item.customerId), body: `満足度が${item.before}から${item.after}へ変化しました。次Turnも対応しない場合の影響をチームで検討してください。` }));
    const opportunities = result.informationDisclosure.slice(0, 2).map((item) => ({ label: "OPPORTUNITY", title: opportunityName(item.opportunityId), body: `${item.field}に関する情報「${item.value}」が得られました。次Turnでどう使うか検討してください。` }));
    const nextDecisions = [];
    if (received.length) nextDecisions.push(`${received[0].opportunityId}をさらに進めて短期売上を狙うか？`);
    if (neglected.length) nextDecisions.push(`${customerName(neglected[0].customerId)}の満足度回復を優先するか？`);
    if (hasInformation) nextDecisions.push("今回得た情報を使って提案を深めるか、別案件の情報収集を続けるか？");
    if (!nextDecisions.length) nextDecisions.push("案件を進めるか、顧客との関係維持を優先するか？");
    const kpiReasons = {
      revenue: received.length ? `${received.map((item) => `${item.opportunityId}（${formatMoney(item.revenue)}）`).join("、")}に商談を行い、受注判定まで進めたためです。` : "今Turnでは受注に至る商談を実施しなかったためです。",
      satisfaction: neglected.length ? `${neglected.slice(0, 2).map((item) => customerName(item.customerId)).join("・")}へのフォローを行わなかったため、関係性が低下し、全体満足度に影響しました。` : "顧客フォローと商談結果の影響が反映されています。",
      grossMargin: received.length ? `受注した案件の粗利率と${received.some((item) => item.discountRate) ? "値引きの影響" : "契約金額"}が全体に反映されたためです。` : "受注がなかったため、初期粗利率から変化していません。",
      pipeline: received.length ? "受注した案件がパイプラインから外れたためです。" : "受注・失注した案件がなく、案件額面は維持されました。"
    };
    return { summary, causes, gains: gains.slice(0, 3), tradeoffs: tradeoffs.slice(0, 2), newInformation: result.informationDisclosure.slice(0, 3), warnings: warnings.slice(0, 3), opportunities: opportunities.slice(0, 3), nextDecisions: nextDecisions.slice(0, 3), kpiReasons };
  }

  function touch(state) {
    state.updatedAt = new Date().toISOString();
  }

  // ==========================================================
  // 画面描画 (旧 js/ui.js)
  // ==========================================================
  const escapeHtml = (value) => String(value).replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" }[char]));
  const byId = (id) => document.getElementById(id);

  function renderScreen(app, state, handlers) {
    const screens = {
      title: renderTitle,
      mission: renderMission,
      turnStart: renderTurnStart,
      dashboard: renderDashboard,
      customers: renderCustomers,
      actions: renderActions,
      meetings: renderMeetings,
      confirm: renderConfirm,
      result: renderResult
    };
    const screen = state?.screen || "title";
    app.innerHTML = screens[screen](state, handlers);
    bindCommon(app, state, handlers);
  }

  function renderTitle() {
    const hasSave = Boolean(activeSavedGame);
    return `<main class="screen hero-screen"><section class="hero-content"><p class="hero-kicker">営業戦略シミュレーション / Turn 1 MVP</p><h1>SALES CRISIS<span>売上1億円からの脱出</span></h1><p class="mission-line">MISSION: 年間売上1億円を達成せよ</p><p class="lead">あなたは売上不振に陥った営業部門の責任者です。<br>残された期間は12か月。<br>限られた営業力と予算を使い、営業戦略を立て直してください。</p><div class="button-row"><button class="primary-button" data-action="new-game">ゲームを開始する</button>${hasSave ? `<button class="ghost-button" data-action="continue-game">続きから始める</button>` : ""}</div></section></main>`;
  }

  function renderMission() {
    return `<main class="screen"><div class="narrow"><div class="page-heading"><div><p class="eyebrow">Mission briefing</p><h2>営業改革の前提を確認</h2><p>35,000,000円はすでに確定しています。ここから残りを作ります。</p></div></div><section class="panel"><div class="grid-3"><div class="metric-card"><span class="metric-label">現在売上</span><strong class="metric-value">${formatMoney(scenario.initial.currentRevenue)}</strong><span class="metric-note">確定済み</span></div><div class="metric-card"><span class="metric-label">年間目標</span><strong class="metric-value">${formatMoney(scenario.initial.targetRevenue)}</strong><span class="metric-note">脱出成功ライン</span></div><div class="metric-card"><span class="metric-label">目標まで</span><strong class="metric-value">${formatMoney(scenario.initial.targetRevenue - scenario.initial.currentRevenue)}</strong><span class="metric-note">残り6ターン</span></div><div class="metric-card"><span class="metric-label">粗利率</span><strong class="metric-value">${scenario.initial.grossMarginRate}%</strong><span class="metric-note">確定売上の平均</span></div><div class="metric-card"><span class="metric-label">営業予算</span><strong class="metric-value">${formatMoney(scenario.initial.budget)}</strong><span class="metric-note">施策費に使用</span></div><div class="metric-card"><span class="metric-label">営業力</span><strong class="metric-value">${scenario.initial.rp}</strong><span class="metric-note">Turn1で使用可能</span></div></div><div class="panel" style="margin-top:18px"><div class="section-title"><h3>案件パイプライン</h3><span class="badge amber">9,700万円</span></div><p class="muted">初期8案件の額面合計です。9,700万円がすべて受注できるわけではありません。案件ごとに確度、期限、必要な準備が異なります。</p></div><div class="button-row" style="margin-top:22px"><button class="primary-button" data-action="start-turn">営業改革を開始する</button></div></section></div></main>`;
  }

  function renderTurnStart() {
    return `<main class="screen"><div class="narrow"><p class="eyebrow">Turn 1 / 6</p><h2>現状分析と種まき</h2><p class="lead">残り12か月</p><section class="panel"><h3>まず営業部門の現状を把握してください。</h3><p class="muted">すべての案件を追うことはできません。どの顧客を優先し、どこに営業力を使うのかを決めます。</p><div class="notice">Turn1ではイベントは発生しません。顧客情報を集めるか、既存案件を進めるかをチームで相談してください。</div><div class="button-row" style="margin-top:22px"><button class="primary-button" data-action="open-dashboard">営業本部へ</button></div></section></div></main>`;
  }

  function kpiStrip(state) {
    const kpis = state.kpis;
    const items = [["累計売上", formatMoney(kpis.totalRevenue), `目標 ${formatMoney(kpis.targetRevenue)}`], ["目標まで", kpis.remainingRevenue ? `あと${formatMoney(kpis.remainingRevenue)}` : "目標達成", "売上進捗"], ["粗利率", `${kpis.grossMarginRate}%`, "累計粗利ベース"], ["残り予算", formatMoney(kpis.budget), `使用 ${formatMoney(kpis.usedBudget)}`], ["営業力", `${kpis.rp}/12`, `使用 ${kpis.usedRP}RP`], ["顧客満足度", `${kpis.satisfaction}`, satisfactionLabel(kpis.satisfaction)]];
    return `<div class="kpi-strip">${items.map(([label, value, note]) => `<div class="kpi"><span class="kpi-label">${label}</span><strong class="kpi-value">${value}</strong><span class="kpi-delta">${note}</span></div>`).join("")}</div>`;
  }

  function shell(state, body) {
    return `<main class="screen"><div class="topbar"><div><span class="brand-mark">SALES CRISIS</span><div class="topbar-meta">Turn ${state.currentTurn} / 現状分析と種まき</div></div><div class="topbar-meta">イベントなし / 2か月経過前</div></div>${kpiStrip(state)}<div class="wide">${body}</div></main>`;
  }

  function stepError(state, key) {
    const errors = state.uiErrors?.[key] || [];
    return errors.length ? `<div class="notice alert step-error" role="alert" id="step-error-${key}"><strong>次へ進む前に確認してください</strong><ul>${errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}</ul></div>` : "";
  }

  function sectionErrorClass(state, key) {
    return (state.uiErrors?.[key] || []).length ? " section-error" : "";
  }

  function renderDashboard(state) {
    const strategyCards = scenario.strategies.map((item) => `<button class="choice-card ${state.selectedStrategy === item.id ? "selected" : ""}" data-strategy="${item.id}"><strong>${item.label}</strong><span>${item.description}</span></button>`).join("");
    const important = state.customers.filter((customer) => customer.priority === "高").slice(0, 3);
    return shell(state, `<div class="page-heading"><div><p class="eyebrow">営業本部ダッシュボード</p><h2>今Turn、何を優先しますか？</h2><p>正解を探すより、何を捨てるかをチームで決めてください。</p></div><span class="badge">BtoB / 無形商材 / 高価格帯</span></div>${stepError(state, "strategy")}${stepError(state, "priority")}<div class="grid-2"><section class="panel"><div class="section-title"><h3>売上進捗</h3><strong>${formatMoney(state.kpis.totalRevenue)} / ${formatMoney(state.kpis.targetRevenue)}</strong></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100, state.kpis.totalRevenue / state.kpis.targetRevenue * 100)}%"></div></div><p class="small muted" style="margin-top:10px">目標まであと${formatMoney(state.kpis.remainingRevenue)}。案件パイプラインは${formatMoney(state.kpis.pipeline)}です。</p></section><section class="panel"><div class="section-title"><h3>案件パイプライン</h3><span class="badge amber">額面合計</span></div><strong class="metric-value">${formatMoney(state.kpis.pipeline)}</strong><p class="small muted">受注見込みは案件ごとに異なります。全件を追うには営業力が足りません。</p></section></div><section class="panel${sectionErrorClass(state, "strategy")}"><div class="section-title"><h3>重点方針</h3><span class="muted small">1つ選択 / 数値ボーナスなし</span></div><div class="choice-grid">${strategyCards}</div></section><section class="panel${sectionErrorClass(state, "priority")}"><div class="section-title"><h3>重要顧客</h3><span class="muted small">最大3社を重点顧客に指定</span></div><div class="customer-grid">${important.map((customer) => customerMini(customer, state)).join("")}</div><div class="button-row" style="margin-top:18px"><button class="secondary-button" data-action="open-customers">顧客・案件を確認する</button><button class="primary-button" data-action="open-actions">営業施策を選ぶ</button></div></section></div>`);
  }

  function customerMini(customer, state) {
    const selected = state.priorityCustomerIds.includes(customer.id);
    return `<div class="customer-card ${selected ? "priority" : ""}"><div class="card-head"><div><h3>${customer.name}</h3><span class="card-meta">${customer.size} / ${customer.trait}</span></div><span class="badge ${customer.risk !== "通常" ? "coral" : ""}">${customer.risk}</span></div><dl class="info-list"><dt>案件</dt><dd>${formatMoney(customer.amount)}</dd><dt>満足度</dt><dd>${customer.satisfaction} / ${satisfactionLabel(customer.satisfaction)}</dd></dl><button class="ghost-button" data-customer-priority="${customer.id}">${selected ? "重点から外す" : "重点顧客にする"}</button></div>`;
  }

  function renderCustomers(state) {
    const cards = state.customers.map((customer) => {
      const opportunity = state.opportunities.find((item) => item.id === customer.linkedOpportunityId);
      return `<article class="customer-card ${state.priorityCustomerIds.includes(customer.id) ? "priority" : ""}"><div class="card-head"><div><h3>${customer.name}</h3><span class="card-meta">${customer.size} / ${customer.trait} / ${customer.relationship}</span></div><span class="badge ${customer.risk !== "通常" ? "coral" : customer.priority === "高" ? "amber" : ""}">${customer.risk !== "通常" ? customer.risk : customer.priority === "高" ? "重要" : "通常"}</span></div><dl class="info-list"><dt>案件金額</dt><dd>${formatMoney(customer.amount)}</dd><dt>ステージ</dt><dd>${opportunity?.stage || "未接触"}</dd><dt>受注見込み</dt><dd>${opportunity ? probabilityBand(opportunity.probability) : "非常に低い"}</dd><dt>満足度</dt><dd>${customer.satisfaction} / ${satisfactionLabel(customer.satisfaction)}</dd></dl><p class="small muted">重要情報: ${customer.important.join("、")}</p><div class="card-actions"><button data-customer-detail="${customer.id}">詳細を見る</button><button class="${state.priorityCustomerIds.includes(customer.id) ? "selected" : ""}" data-customer-priority="${customer.id}">${state.priorityCustomerIds.includes(customer.id) ? "重点顧客" : "重点にする"}</button>${opportunity ? `<button data-meeting-start="${opportunity.id}">商談する</button>` : ""}</div></article>`;
    }).join("");
    return shell(state, `<div class="page-heading"><div><p class="eyebrow">Customer & opportunity review</p><h2>顧客・案件を絞り込む</h2><p>詳細を見るだけでは営業力を消費しません。最大3社を重点顧客にできます。</p></div></div>${stepError(state, "priority")}<section class="panel${sectionErrorClass(state, "priority")}"><div class="customer-grid">${cards}</div><div class="button-row" style="margin-top:20px"><button class="secondary-button" data-action="open-dashboard">ダッシュボードへ戻る</button><button class="primary-button" data-action="open-actions">営業施策を選ぶ</button></div></section><div id="detail-panel"></div>`);
  }

  function renderActions(state) {
    const selectedSummary = state.selectedActions.length ? state.selectedActions.map((item, index) => { const action = scenario.actions.find((entry) => entry.id === item.actionId); return `<div class="result-item"><strong>${action.name}${item.targetId ? ` / ${item.targetId}` : ""}</strong><p>${item.rp}営業力 / ${formatYen(item.cost)} <button class="ghost-button" data-remove-action="${index}" style="float:right;padding:4px 8px">外す</button></p></div>`; }).join("") : `<div class="empty-state">まだ施策を選んでいません。営業力を残す判断もできます。</div>`;
    const actionCards = scenario.actions.map((action) => { const validation = validateAction(action.id); const disabled = !validation.ok; return `<article class="action-card"><div class="card-head"><div><h3>${action.name}</h3><span class="card-meta">${action.timing} / 対象: ${action.target}</span></div><span class="badge">${action.rp}営業力</span></div><dl class="info-list"><dt>必要予算</dt><dd>${formatYen(action.cost)}</dd><dt>期待効果</dt><dd>${action.effect}</dd></dl><p class="small muted">リスク: ${action.risk}</p><button class="primary-button" data-action-add="${action.id}" ${disabled ? "disabled" : ""}>${disabled ? escapeHtml(validation.reason) : "この施策を選ぶ"}</button></article>`; }).join("");
    return shell(state, `<div class="page-heading"><div><p class="eyebrow">Resource allocation</p><h2>営業力と予算を配分</h2><p>最大5施策。RPと予算が同時に減ります。</p></div></div>${stepError(state, "priority")}${stepError(state, "actions")}<div class="grid-2"><section class="panel${sectionErrorClass(state, "actions")}"><div class="section-title"><h3>施策一覧</h3><span class="badge amber">${state.selectedActions.length} / 5</span></div><div class="action-grid">${actionCards}</div></section><section class="panel"><div class="section-title"><h3>今回の配分</h3><span class="muted small">未使用営業力: ${state.kpis.rp}</span></div><div class="result-list">${selectedSummary}</div><div class="notice" style="margin-top:14px">施策の対象が必要な場合は、追加後に顧客・案件を指定します。まずは全体配分を決めます。</div><div class="button-row" style="margin-top:18px"><button class="secondary-button" data-action="open-dashboard">戻る</button><button class="primary-button" data-action="open-meetings">商談へ進む</button></div></section></div>`);
  }

  function renderMeetings(state) {
    const cards = state.opportunities.map((opportunity) => { const customer = state.customers.find((item) => item.id === opportunity.customerId); const meeting = state.meetings.find((item) => item.opportunityId === opportunity.id); return `<article class="customer-card"><div class="card-head"><div><h3>${customer.name}</h3><span class="card-meta">${opportunity.id} / ${opportunity.stage}</span></div><span class="badge ${probabilityBand(opportunity.probability) === "高い" ? "amber" : ""}">${probabilityBand(opportunity.probability)}</span></div><dl class="info-list"><dt>案件金額</dt><dd>${formatMoney(opportunity.faceValue)}</dd><dt>必要営業力</dt><dd>${opportunity.requiredRP}RP目安</dd><dt>ボトルネック</dt><dd>${opportunity.bottleneck}</dd></dl><p class="small muted">課題: ${customer.info.issue}</p><div class="card-actions"><button data-meeting-start="${opportunity.id}">${meeting ? "商談を編集" : "商談を開始"}</button></div></article>`; }).join("");
    const meetingPanels = state.meetings.map((meeting) => meetingForm(state, meeting)).join("");
    return shell(state, `<div class="page-heading"><div><p class="eyebrow">Important meetings</p><h2>商談を組み立てる</h2><p>最大2案件。質問は1案件につき最大3つです。正解や受注確率は表示しません。</p></div><span class="badge amber">${state.meetings.length} / 2案件</span></div><section class="panel"><div class="customer-grid">${cards}</div></section>${meetingPanels ? `<section class="panel"><div class="section-title"><h3>入力中の商談</h3><span class="muted small">確定前は何度でも修正できます</span></div>${meetingPanels}</section>` : ""}<div class="summary-bar"><div class="summary-values"><span class="muted">商談</span><strong>${state.meetings.length} / 2案件</strong><span class="muted">質問</span><strong>各3問まで</strong></div><div class="button-row"><button class="secondary-button" data-action="open-actions">施策へ戻る</button><button class="primary-button" data-action="open-confirm">意思決定を確認</button></div></div>`);
  }

  function meetingForm(state, meeting) {
    const opportunity = state.opportunities.find((item) => item.id === meeting.opportunityId);
    const customer = state.customers.find((item) => item.id === opportunity.customerId);
    return `<div class="detail-block" style="margin-top:14px"><div class="section-title"><h3>${opportunity.id} ${customer.name}</h3><span class="badge">${customer.info.issue}</span></div><p class="small muted">現在分かっている情報: ${Object.entries(customer.info).filter(([, value]) => value !== "未確認").map(([key, value]) => `${key}: ${value}`).join(" / ") || "基本情報のみ"}</p><div class="form-group"><label>質問を最大3つ</label><div class="choice-grid">${scenario.questions.map((question) => `<button class="choice-card ${meeting.questionIds.includes(question.id) ? "selected" : ""}" data-meeting-question="${opportunity.id}" data-question-id="${question.id}"><strong>${question.label}</strong><span>${question.purpose}</span></button>`).join("")}</div></div><div class="form-row"><div class="form-group"><label for="primary-${opportunity.id}">主提案</label><select id="primary-${opportunity.id}" data-meeting-field="primaryProposal" data-opportunity-id="${opportunity.id}"><option value="">選択してください</option>${scenario.proposals.map((item) => `<option ${meeting.primaryProposal === item ? "selected" : ""}>${item}</option>`).join("")}</select></div><div class="form-group"><label for="secondary-${opportunity.id}">副提案</label><select id="secondary-${opportunity.id}" data-meeting-field="secondaryProposal" data-opportunity-id="${opportunity.id}"><option>なし</option>${scenario.proposals.filter((item) => item !== meeting.primaryProposal).map((item) => `<option ${meeting.secondaryProposal === item ? "selected" : ""}>${item}</option>`).join("")}</select></div><div class="form-group"><label for="price-${opportunity.id}">価格</label><select id="price-${opportunity.id}" data-meeting-field="pricingRate" data-opportunity-id="${opportunity.id}">${scenario.pricing.map((item) => `<option value="${item.rate}" ${meeting.pricingRate === item.rate ? "selected" : ""}>${item.label}${item.rate ? ` / 粗利率${item.margin}pt` : ""}</option>`).join("")}</select></div><div class="form-group"><label for="next-${opportunity.id}">次回アクション</label><select id="next-${opportunity.id}" data-meeting-field="nextAction" data-opportunity-id="${opportunity.id}"><option value="">選択してください</option>${scenario.nextActions.map((item) => `<option ${meeting.nextAction === item ? "selected" : ""}>${item}</option>`).join("")}</select></div></div><div class="notice" style="margin-top:10px">${meeting.reaction || "質問と提案を入力すると、顧客の反応がここに表示されます。"}</div></div>`;
  }

  function renderConfirm(state) {
    const selectedActions = state.selectedActions.map((item) => { const action = scenario.actions.find((entry) => entry.id === item.actionId); return `<li>${action.name}${item.targetId ? ` (${item.targetId})` : ""}: ${item.rp}営業力 / ${formatYen(item.cost)}</li>`; }).join("") || "<li>なし</li>";
    const meetings = state.meetings.map((meeting) => { const opportunity = state.opportunities.find((item) => item.id === meeting.opportunityId); return `<li>${opportunity.id}: ${meeting.questionIds.length}問 / ${meeting.primaryProposal || "主提案未選択"} / ${scenario.pricing.find((item) => item.rate === meeting.pricingRate)?.label}</li>`; }).join("") || "<li>なし</li>";
    const neglected = state.customers.filter((customer) => !state.priorityCustomerIds.includes(customer.id) && !state.meetings.some((meeting) => state.opportunities.find((opportunity) => opportunity.id === meeting.opportunityId)?.customerId === customer.id)).slice(0, 5).map((customer) => customer.name).join("、") || "なし";
    const tags = ["売上優先", "顧客維持", "粗利重視", "将来投資", "期限対応", "情報収集"];
    const validation = validateTurnDecision(state);
    const validationPanel = validation.ok ? (validation.remainingRP >= 4 ? `<div class="notice">営業力が${validation.remainingRP}ポイント残っています。残したまま進める場合は、次の確認で理由を考えてください。</div>` : `<div class="notice success">必須条件を満たしています。商談0件でも、他の営業活動を行っていれば進められます。</div>`) : `<div class="notice alert"><strong>Turnを進めるには、以下の意思決定が必要です</strong><ul>${validation.missing.map((item) => `<li>${item}</li>`).join("")}</ul></div>`;
    return shell(state, `<div class="page-heading"><div><p class="eyebrow">Decision checkpoint</p><h2>この営業方針で2か月を進めますか？</h2><p>確定後はTurn1の選択を変更できません。</p></div></div><div class="grid-2"><section class="panel"><div class="detail-block"><h3>重点方針</h3><p>${scenario.strategies.find((item) => item.id === state.selectedStrategy)?.label || "未選択"}</p></div><div class="detail-block"><h3>重点顧客</h3><p>${state.priorityCustomerIds.join("、") || "なし"}</p></div><div class="detail-block"><h3>営業施策</h3><ul>${selectedActions}</ul></div><div class="detail-block"><h3>商談</h3><ul>${meetings}</ul></div><div class="detail-block"><h3>未対応になりやすい顧客</h3><p>${neglected}</p></div></section><section class="panel${sectionErrorClass(state, "rationale")}"><h3>チームの意思決定理由</h3><p class="small muted">理由タグは最大2個。自由記述は任意です。</p>${stepError(state, "rationale")}<div class="choice-grid">${tags.map((tag) => `<button class="choice-card ${state.rationaleTags.includes(tag) ? "selected" : ""}" data-rationale-tag="${tag}"><strong>${tag}</strong><span>今回の判断軸として記録</span></button>`).join("")}</div><div class="form-group" style="margin-top:18px"><label for="rationale">自由記述（任意・最大140文字）</label><textarea id="rationale" maxlength="140" data-rationale-text>${escapeHtml(state.rationaleText)}</textarea><div class="char-count"><span data-char-count>${state.rationaleText.length}</span> / 140</div></div>${validationPanel}<div class="button-row" style="margin-top:16px"><button class="secondary-button" data-action="open-meetings">戻って修正する</button><button class="primary-button" data-action="resolve-turn">2か月を進める</button></div></section></div>`);
  }

  function renderResult(state) {
    const result = state.turnResult;
    const feedback = result.feedback || { summary: "Turn1の結果を確認してください。", causes: [], gains: [], tradeoffs: [], newInformation: [], warnings: [], opportunities: [], nextDecisions: [] };
    const before = result.before;
    const after = result.after;
    const moneyDiff = (value) => value > 0 ? `+${formatMoney(value)}` : value < 0 ? `-${formatMoney(Math.abs(value))}` : "変化なし";
    const signed = (value, suffix = "") => `${value > 0 ? "+" : ""}${value}${suffix}`;
    const outcomes = result.outcomes.length ? result.outcomes.map((item) => `<div class="result-item"><strong>${item.opportunityId} / ${item.outcome}${item.revenue ? ` / 売上${formatMoney(item.revenue)}` : ""}</strong><p>${item.outcome === "受注" ? "選択した質問・提案・価格が案件の前進に寄与しました。" : item.outcome === "保留" ? "次回に確認すべき情報が残りました。" : "提案適合、情報、関係性などの複数要因が影響しました。"}</p></div>`).join("") : `<div class="empty-state">商談を行わず、営業施策と顧客対応に営業力を配分しました。</div>`;
    const reasons = feedback.kpiReasons || {};
    const kpis = [["売上", formatMoney(before.totalRevenue), formatMoney(after.totalRevenue), moneyDiff(after.totalRevenue - before.totalRevenue), reasons.revenue || "売上の変化は今回の受注結果によるものです。"], ["粗利率", `${before.grossMarginRate}%`, `${after.grossMarginRate}%`, signed(Math.round((after.grossMarginRate - before.grossMarginRate) * 10) / 10, "pt"), reasons.grossMargin || "粗利率の変化を確認してください。"], ["顧客満足度", before.satisfaction, after.satisfaction, signed(after.satisfaction - before.satisfaction), reasons.satisfaction || "顧客対応の影響が反映されています。"], ["パイプライン", formatMoney(before.pipeline), formatMoney(after.pipeline), moneyDiff(after.pipeline - before.pipeline), reasons.pipeline || "案件状態の変化が反映されています。"]];
    const section = (title, content) => `<section class="panel"><div class="section-title"><h3>${title}</h3></div>${content}</section>`;
    const cards = (items, empty) => items.length ? `<div class="result-list">${items.map((item) => `<div class="result-item"><strong>${item.title || item.label}</strong><p>${item.body}</p></div>`).join("")}</div>` : `<div class="empty-state">${empty}</div>`;
    const causeFlow = feedback.causes.length ? feedback.causes.map((item) => `<div class="result-item"><strong>あなたの判断: ${item.title}</strong><p>↓ 行動と顧客・案件への影響<br>↓ ${item.body}</p></div>`).join("") : `<div class="empty-state">今回の結果に紐づく追加の因果情報はありません。</div>`;
    const newInfo = feedback.newInformation.map((item) => ({ title: `${item.opportunityId} / ${item.field}`, body: item.value })).slice(0, 3);
    const warningItems = [...feedback.warnings, ...feedback.opportunities];
    return shell(state, `<section class="result-hero"><p class="eyebrow" style="color:#b8e0d8">Turn 1 / 営業会議の振り返り</p><h2>TURN総括</h2><p>${feedback.summary}</p></section><div class="grid-2" style="margin-top:18px">${section("KPI結果", `<div class="result-list">${kpis.map(([label, from, to, change, reason]) => `<div class="result-item"><strong>${label}</strong><p>${from} → ${to} <b>${change}</b></p><p class="small muted">理由: ${reason}</p></div>`).join("")}</div>`)}${section("今回の商談結果", `<div class="result-list">${outcomes}</div>`)}</div>${section("なぜこの結果になった？", `<div class="result-list">${causeFlow}</div>`)}<div class="grid-2">${section("今回得たもの", cards(feedback.gains, "売上以外を含む明確な成果は、今回のログからは確認できません。"))}${section("今回の代償・見逃したもの", cards(feedback.tradeoffs, "今回のログから大きな代償は確認できません。"))}</div>${section("新しく分かった情報", cards(newInfo, "今回新しく開示された情報はありません。"))}${section("次Turnで対応すべき危機・機会", cards(warningItems, "今回新しく発生した危機・機会はありません。"))}${section("NEXT DECISION", `<div class="notice">${feedback.nextDecisions.map((item) => `<p>・${item}</p>`).join("")}<p>チームで優先順位を決めてください。答えはここでは示しません。</p></div>`)}<section class="panel"><div class="notice success">Turn1 MVPはここまでです。Turn2以降はまだ実装していません。</div><div class="button-row" style="margin-top:18px"><button class="primary-button" data-action="restart">もう一度プレイする</button></div></section>`);
  }

  function bindCommon(app, state, handlers) {
    app.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => handlers.action(button.dataset.action)));
    app.querySelectorAll("[data-strategy]").forEach((button) => button.addEventListener("click", () => handlers.strategy(button.dataset.strategy)));
    app.querySelectorAll("[data-customer-priority]").forEach((button) => button.addEventListener("click", () => handlers.priority(button.dataset.customerPriority)));
    app.querySelectorAll("[data-action-add]").forEach((button) => button.addEventListener("click", () => handlers.addAction(button.dataset.actionAdd)));
    app.querySelectorAll("[data-remove-action]").forEach((button) => button.addEventListener("click", () => handlers.removeAction(Number(button.dataset.removeAction))));
    app.querySelectorAll("[data-meeting-start]").forEach((button) => button.addEventListener("click", () => handlers.meetingStart(button.dataset.meetingStart)));
    app.querySelectorAll("[data-meeting-question]").forEach((button) => button.addEventListener("click", () => handlers.question(button.dataset.meetingQuestion, button.dataset.questionId)));
    app.querySelectorAll("[data-meeting-field]").forEach((input) => input.addEventListener("change", () => handlers.meetingField(input.dataset.opportunityId, input.dataset.meetingField, input.value)));
    app.querySelectorAll("[data-rationale-tag]").forEach((button) => button.addEventListener("click", () => handlers.rationaleTag(button.dataset.rationaleTag)));
    const rationale = app.querySelector("[data-rationale-text]");
    if (rationale) rationale.addEventListener("input", () => handlers.rationaleText(rationale.value));
    app.querySelectorAll("[data-customer-detail]").forEach((button) => button.addEventListener("click", () => handlers.detail(button.dataset.customerDetail)));
    const firstStepError = app.querySelector(".step-error");
    if (firstStepError) requestAnimationFrame(() => firstStepError.scrollIntoView({ behavior: "smooth", block: "center" }));
  }

  function renderDetail(app, state, customerId, handlers) {
    const customer = state.customers.find((item) => item.id === customerId);
    if (!customer) return;
    const opportunity = state.opportunities.find((item) => item.id === customer.linkedOpportunityId);
    const panel = byId("detail-panel");
    if (!panel) return;
    panel.innerHTML = `<section class="panel" style="margin-top:18px"><div class="section-title"><h3>${customer.name}の詳細</h3><button class="ghost-button" data-close-detail>閉じる</button></div><div class="detail-grid"><div class="detail-block"><h3>現在分かっている情報</h3><p>規模: ${customer.size}</p><p>特性: ${customer.trait}</p><p>関係性: ${customer.relationship}</p><p>課題: ${customer.info.issue}</p></div><div class="detail-block"><h3>まだ確認できていない情報</h3><p>導入時期: ${customer.info.timing}</p><p>予算: ${customer.info.budget}</p><p>決裁者: ${customer.info.decisionMaker}</p><p>競合: ${customer.info.competitor === "未確認" ? "未確認" : customer.info.competitor}</p></div><div class="detail-block"><h3>案件状況</h3><p>${opportunity ? `${opportunity.id} / ${opportunity.stage} / 受注見込み ${probabilityBand(opportunity.probability)}` : "初期案件なし"}</p><p>ボトルネック: ${opportunity?.bottleneck || "未確認"}</p></div><div class="detail-block"><h3>過去接点</h3><p>${customer.viewed ? "このTurnで詳細を確認しました。詳細確認そのものでは営業力を消費しません。" : "まだこの顧客の詳細を開いていません。"}</p><button class="primary-button" data-meeting-start="${opportunity?.id || ""}" ${opportunity ? "" : "disabled"}>商談を開始する</button></div></div></section>`;
    panel.querySelector("[data-close-detail]").addEventListener("click", () => { panel.innerHTML = ""; });
    panel.querySelector("[data-meeting-start]")?.addEventListener("click", () => handlers.meetingStart(opportunity.id));
  }

  // ==========================================================
  // 起動処理 (旧 js/app.js)
  // ==========================================================
  const app = document.getElementById("app");
  let state = null;
  let activeSavedGame = loadGame();

  function persist() {
    if (state) saveGame(state);
  }

  function render() {
    renderScreen(app, state, handlers);
  }

  function goTo(nextScreen, step) {
    const validation = validateCurrentStep(state, step);
    if (!validation.ok) {
      persist();
      render();
      return false;
    }
    clearUiError(state, step);
    state.screen = nextScreen;
    persist();
    render();
    return true;
  }

  function validateAction(actionId) {
    if (!state) return { ok: false, reason: "ゲームを開始してください。" };
    const action = scenario.actions.find((item) => item.id === actionId);
    if (!action) return { ok: false, reason: "施策が見つかりません。" };
    const count = state.selectedActions.filter((item) => item.actionId === actionId).length;
    if (state.selectedActions.length >= 5) return { ok: false, reason: "施策は最大5件です。" };
    if (count >= (actionId === "meeting-prep" || actionId === "hearing" ? 2 : 1)) return { ok: false, reason: "Turn1の選択上限です。" };
    if (state.kpis.rp < action.rp) return { ok: false, reason: "営業力不足" };
    if (state.kpis.budget < action.cost) return { ok: false, reason: "予算不足" };
    if (actionId === "referral" && !state.customers.some((customer) => customer.satisfaction >= 70)) return { ok: false, reason: "紹介元が必要" };
    return { ok: true };
  }

  const handlers = {
    action(action) {
      if (action === "new-game") {
        if (activeSavedGame && !window.confirm("保存中のゲームを削除して最初から始めますか？")) return;
        clearGame();
        activeSavedGame = null;
        state = createInitialState();
        state.screen = "mission";
        persist();
      }
      if (action === "continue-game") {
        state = activeSavedGame || loadGame();
        if (!state) return;
      }
      if (action === "start-turn") { state.screen = "turnStart"; persist(); }
      if (action === "open-dashboard") { state.screen = "dashboard"; persist(); }
      if (action === "open-customers") goTo("customers", "strategy");
      if (action === "open-actions") {
        const strategyValidation = validateCurrentStep(state, "strategy");
        const priorityValidation = validateCurrentStep(state, "priority");
        if (!strategyValidation.ok || !priorityValidation.ok) { persist(); render(); return; }
        clearUiError(state, "strategy");
        clearUiError(state, "priority");
        state.screen = "actions";
        persist();
      }
      if (action === "open-meetings") goTo("meetings", "actions");
      if (action === "open-confirm") { clearUiError(state, "actions"); state.screen = "confirm"; persist(); }
      if (action === "resolve-turn") {
        const stepValidation = validateCurrentStep(state, "rationale");
        if (!stepValidation.ok) {
          persist();
          render();
          return;
        }
        const validation = validateTurnDecision(state);
        if (!validation.ok) {
          window.alert("Turnを進めるには、以下の意思決定が必要です:\n・" + validation.missing.join("\n・"));
          render();
          return;
        }
        if (validation.remainingRP >= 4 && !window.confirm(`営業力が${validation.remainingRP}ポイント残っています。\n\nこのTurnでは営業力を十分に使い切っていません。\n営業力を残したまま2か月を終了しますか？`)) {
          state.screen = "actions";
          persist();
          render();
          return;
        }
        const result = resolveTurn(state);
        if (!result.ok) window.alert(result.reason);
        else persist();
      }
      if (action === "restart") {
        clearGame();
        activeSavedGame = null;
        state = createInitialState();
        state.screen = "mission";
        persist();
      }
      render();
    },
    strategy(strategyId) {
      selectStrategy(state, strategyId);
      refreshStepError(state, "strategy");
      persist();
      render();
    },
    priority(customerId) {
      togglePriorityCustomer(state, customerId);
      refreshStepError(state, "priority");
      persist();
      render();
    },
    validateAction,
    addAction(actionId) {
      const result = addAction(state, actionId);
      if (!result.ok) window.alert(result.reason);
      refreshStepError(state, "actions");
      persist();
      render();
    },
    removeAction(index) {
      removeAction(state, index);
      refreshStepError(state, "actions");
      persist();
      render();
    },
    meetingStart(opportunityId) {
      if (!opportunityId) return;
      const result = prepareMeeting(state, opportunityId);
      if (!result.ok) window.alert(result.reason);
      else state.screen = "meetings";
      persist();
      render();
    },
    question(opportunityId, questionId) {
      toggleQuestion(state, opportunityId, questionId);
      persist();
      render();
    },
    meetingField(opportunityId, field, value) {
      const patch = { [field]: field === "pricingRate" ? Number(value) : value };
      updateMeeting(state, opportunityId, patch);
      const meeting = state.meetings.find((item) => item.opportunityId === opportunityId);
      if (meeting) meeting.reaction = "入力内容をもとに顧客の反応を整理しています。";
      persist();
      render();
    },
    rationaleTag(tag) {
      const tags = state.rationaleTags.includes(tag) ? state.rationaleTags.filter((item) => item !== tag) : state.rationaleTags.length < 2 ? [...state.rationaleTags, tag] : state.rationaleTags;
      setRationale(state, tags, state.rationaleText);
      refreshStepError(state, "rationale");
      persist();
      render();
    },
    rationaleText(text) {
      setRationale(state, state.rationaleTags, text);
      persist();
      const count = document.querySelector("[data-char-count]");
      if (count) count.textContent = state.rationaleText.length;
    },
    detail(customerId) {
      openCustomer(state, customerId);
      persist();
      renderDetail(app, state, customerId, handlers);
    }
  };

  window.addEventListener("storage", () => {
    activeSavedGame = loadGame();
  });

  render();
})();
