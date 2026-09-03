export type Locale = "en" | "tr";

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeName: string;
  flag: string;
}

export interface Dictionary {
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    create: string;
    search: string;
    filter: string;
    all: string;
    actions: string;
    loading: string;
    back: string;
    export: string;
    download: string;
    share: string;
    details: string;
    status: string;
    operational: string;
    quickJump: string;
    signOut: string;
    profileDetails: string;
    systemSettings: string;
    noResults: string;
    active: string;
    inactive: string;
    invited: string;
    suspended: string;
    inStock: string;
    lowStock: string;
    outOfStock: string;
    published: string;
    draft: string;
    scheduled: string;
    trial: string;
    churned: string;
    yesterday: string;
    today: string;
    thisWeek: string;
    daysAgo: string;
  };
  nav: {
    overview: string;
    workspace: string;
    operations: string;
    administration: string;
    dashboard: string;
    analytics: string;
    tasks: string;
    messages: string;
    files: string;
    posts: string;
    products: string;
    customers: string;
    team: string;
    roles: string;
    notifications: string;
    settings: string;
    states: string;
  };
  dashboard: {
    goodMorning: string;
    goodAfternoon: string;
    goodEvening: string;
    welcomeBack: string;
    tasksCount: string;
    unreadCount: string;
    onlineCount: string;
    activeTasksTitle: string;
    activeTasksCaption: string;
    teamMembersTitle: string;
    teamMembersCaption: string;
    cloudStorageTitle: string;
    cloudStorageCaption: string;
    revenueTitle: string;
    revenueDescription: string;
    upcomingTasksTitle: string;
    teamSummaryTitle: string;
    totalMembers: string;
    topCustomersTitle: string;
    viewAll: string;
    recentActivityTitle: string;
  };
  analytics: {
    title: string;
    description: string;
    scorecardTitle: string;
    scorecardDescription: string;
    grossRevenue: string;
    netProfit: string;
    operatingMargin: string;
    totalInvoices: string;
    avgTransaction: string;
    growthRate: string;
    revenueTrend: string;
    monthlyBreakdown: string;
    periodDetail: string;
    exportCsv: string;
    month: string;
    revenue: string;
    expenses: string;
    net: string;
    margin: string;
    yoyGrowth: string;
    trend: string;
    target: string;
  };
  tasks: {
    title: string;
    description: string;
    newTask: string;
    todo: string;
    inProgress: string;
    done: string;
    noTasks: string;
    priority: {
      high: string;
      medium: string;
      low: string;
    };
  };
  messages: {
    title: string;
    unreadCount: string;
    compose: string;
    searchPlaceholder: string;
    selectPrompt: string;
    replyPlaceholder: string;
    send: string;
  };
  files: {
    title: string;
    description: string;
    upload: string;
    cloudStorage: string;
    storageUsage: string;
    searchPlaceholder: string;
    tabs: {
      all: string;
      documents: string;
      media: string;
      archives: string;
    };
    columns: {
      name: string;
      size: string;
      modifiedBy: string;
      lastUpdated: string;
      actions: string;
    };
    shared: string;
  };
  posts: {
    title: string;
    description: string;
    newPost: string;
    searchPlaceholder: string;
    columns: {
      title: string;
      author: string;
      category: string;
      status: string;
      length: string;
      published: string;
    };
    empty: string
    unpublished: string
  }
  products: {
    title: string;
    description: string;
    addProduct: string;
    searchPlaceholder: string;
    columns: {
      product: string;
      sku: string;
      category: string;
      price: string;
      stock: string;
      status: string;
    };
    empty: string
    units: string
  }
  customers: {
    title: string;
    description: string;
    addCustomer: string;
    searchPlaceholder: string;
    kpi: {
      totalAccounts: string;
      activeAccounts: string;
      inTrial: string;
      trackedMrr: string;
    };
    columns: {
      client: string;
      company: string;
      plan: string;
      mrr: string;
      status: string;
      lastContact: string;
      actions: string;
    };
    empty: string;
    kpiCaptions: {
      organizationsRegistered: string
      activeRatio: string
      conversionWindowOpen: string
      acrossPayingAccounts: string
    }
    perMonth: string
  }
  team: {
    title: string;
    description: string;
    inviteMember: string;
    searchPlaceholder: string;
    columns: {
      user: string;
      role: string;
      department: string;
      status: string;
      created: string;
      actions: string;
    };
    detail: {
      back: string;
      profileSubtitle: string;
      accountDetails: string;
      assignedRole: string;
      department: string;
      joinedDate: string;
      lastActive: string;
      accountStatus: string;
    };
    form: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      role: string;
      department: string;
      submit: string;
    };
  };
  roles: {
    title: string;
    description: string;
    newRole: string;
    matrixTitle: string;
    permissionsCount: string;
    roleSummary: string
    permissionName: string
    roleLabel: string
    groups: {
      overview: string;
      team: string;
      content: string;
      catalog: string;
      data: string;
      system: string;
    };
  };
  notifications: {
    title: string;
    description: string;
    markAllRead: string;
    noNotifications: string;
    groups: {
      today: string;
      yesterday: string;
      thisWeek: string;
    };
  };
  settings: {
    title: string;
    description: string;
    tabs: {
      profile: string;
      account: string;
    };
    profile: {
      title: string;
      description: string;
      displayName: string;
      email: string;
      role: string;
      bio: string;
      saveChanges: string;
      savedSuccess: string;
    };
    account: {
      securityTitle: string;
      securityDesc: string;
      currentPasskey: string;
      newPasskey: string;
      updatePasskey: string;
      dangerZone: string;
      dangerDesc: string;
      dangerWarning: string;
      deleteWorkspace: string;
    };
  };
  states: {
    folioBadge: string;
    interactiveGallery: string;
    title: string;
    description: string;
    tabs: {
      overview: string;
      empty: string;
      skeletons: string;
      success: string;
      testing: string;
    };
    activeView: string;
    card404Title: string;
    card404Desc: string;
    card404Button: string;
    card403Title: string;
    card403Desc: string;
    card403Button: string;
    cardSuccessTitle: string;
    cardSuccessDesc: string;
    cardSuccessButton: string;
    card500Title: string;
    card500Desc: string;
    card500Button: string;
    cardLoadingTitle: string;
    cardLoadingDesc: string;
    cardLoadingButton: string;
    cardEmptyTitle: string;
    cardEmptyDesc: string;
    cardEmptyButton: string;
  };
  dataTable: {
    showingPrefix: string
    to: string
    of: string
    results: string
    previous: string
    next: string
    page: string
  }
  sidebar: {
    craftedBy: string
  }
  systemPages: {
    notFound: {
      edition: string;
      status: string;
      stamp: string;
      title: string;
      description: string;
      returnDashboard: string;
      viewTasks: string;
      directoryTitle: string;
      dashboardTitle: string;
      dashboardDesc: string;
      analyticsTitle: string;
      analyticsDesc: string;
      filesTitle: string;
      filesDesc: string;
      settingsTitle: string;
      settingsDesc: string;
      footerRuntime: string;
      homeLink: string;
      supportLink: string;
    };
    error: {
      badge: string;
      refPrefix: string;
      title: string;
      description: string;
      tryAgain: string;
      returnDashboard: string;
      diagnosticsTitle: string;
      exceptionMsg: string;
      digestId: string;
      copyDiagnostics: string;
      copied: string;
    };
    forbidden: {
      badge: string;
      title: string;
      description: string;
      returnDashboard: string;
    };
    success: {
      badge: string;
      title: string;
      description: string;
      referenceIdLabel: string;
      viewRecords: string;
      exploreStates: string;
    };
    empty: {
      blankTag: string;
      blankTitle: string;
      blankDesc: string;
      blankAction1: string;
      blankAction2: string;
      searchTag: string;
      searchTitlePrefix: string;
      searchDesc: string;
      searchClear: string;
      filterTag: string;
      filterTitle: string;
      filterDesc: string;
      filterReset: string;
      errorTag: string;
      errorTitle: string;
      errorDesc: string;
      errorRetry: string;
    };
    shimmer: {
      boxTitle: string;
      boxDesc: string;
      btnReveal: string;
      btnShimmer: string;
      kpiTitle: string;
      tableTitle: string;
      stat1: string;
      stat1Trend: string;
      stat2: string;
      stat2Trend: string;
      stat3: string;
      stat3Trend: string;
      stat4: string;
      stat4Trend: string;
      colFolio: string;
      colCategory: string;
      colTimestamp: string;
      colAmount: string;
      row1Cat: string;
      row2Cat: string;
      row3Cat: string;
    };
    receipt: {
      badge: string;
      title: string;
      description: string;
      fieldVault: string;
      fieldVaultVal: string;
      fieldStatus: string;
      fieldStatusVal: string;
      fieldCount: string;
      fieldCountVal: string;
      btnDownload: string;
      btnReturn: string;
      toast: string;
    };
    testing: {
      title: string;
      description: string;
      button: string;
    };
  };
}
