/* =========================================================
   DOCUMENT MANAGEMENT SYSTEM
   LOCAL PDF DOCUMENTATION
   ========================================================= */


/* =========================================================
   PROJECT CONFIGURATION
   ========================================================= */

const AI_WORKER_URL =
  'https://ancient-lake-71ac.autointerviews.workers.dev';


/* =========================================================
   LOCAL DOCUMENT LIBRARY CONFIGURATION
   ========================================================= */

const LOCAL_BOOKS_DB_NAME =
  'universal-ai-library-local-books-db';

const LOCAL_BOOKS_DB_VERSION =
  1;

const LOCAL_BOOKS_STORE_NAME =
  'settings';

const LOCAL_BOOKS_HANDLE_KEY =
  'books-directory-handle';

let LOCAL_BOOKS_DIRECTORY_HANDLE =
  null;

let LOCAL_BOOK_FILES =
  new Map();


/* =========================================================
   DOCUMENT DATA
   ========================================================= */

let BOOKS = [];


/* =========================================================
   APPLICATION I18N
   ========================================================= */

const I18N = {

  en: {

    appTitle:
      'Document Management System',

    dashboard:
      'Dashboard',

    documents:
      'Documents',

    search:
      'Search',

    categories:
      'Categories',

    recent:
      'Recent',

    favorites:
      'Favorites',

    review:
      'Review',

    archive:
      'Archive',

    ai:
      'Document AI',

    saved:
      'AI Results',

    settings:
      'Settings',

    language:
      'Language',

    overview:
      'Overview',

    totalDocuments:
      'Total documents',

    categoriesCount:
      'Categories',

    reviewCount:
      'Needs review',

    favoriteCount:
      'Favorites',

    activeDocuments:
      'Active documents',

    archivedDocuments:
      'Archived documents',

    expiredDocuments:
      'Expired documents',

    recentDocuments:
      'Recent documents',

    noDocuments:
      'No documents found.',

    noFavorites:
      'No favorite documents yet.',

    noRecent:
      'No recently opened documents yet.',

    noReview:
      'No documents currently require review.',

    noArchive:
      'No archived documents.',

    noCategories:
      'No categories found.',

    documentsInCategory:
      'documents',

    open:
      'Open',

    openPdf:
      'Open PDF',

    details:
      'Details',

    documentDetails:
      'Document details',

    documentId:
      'Document ID',

    title:
      'Title',

    filename:
      'Filename',

    folder:
      'Folder',

    category:
      'Category',

    subcategory:
      'Subcategory',

    department:
      'Department',

    owner:
      'Owner',

    author:
      'Author',

    documentDate:
      'Document date',

    lastModified:
      'Last modified',

    fileSize:
      'File size',

    pages:
      'Pages',

    type:
      'Type',

    status:
      'Status',

    version:
      'Version',

    tags:
      'Tags',

    notes:
      'Notes',

    keywords:
      'Keywords',

    active:
      'Active',

    draft:
      'Draft',

    inReview:
      'In review',

    approved:
      'Approved',

    valid:
      'Valid',

    expired:
      'Expired',

    archived:
      'Archived',

    unknown:
      'Unknown',

    markFavorite:
      'Add to favorites',

    removeFavorite:
      'Remove from favorites',

    markArchived:
      'Archive document',

    restoreDocument:
      'Restore document',

    markReview:
      'Send to review',

    saveMetadata:
      'Save metadata',

    cancel:
      'Cancel',

    back:
      'Back',

    refresh:
      'Refresh',

    chooseFolder:
      'Choose documents folder',

    changeFolder:
      'Change folder',

    refreshDocuments:
      'Refresh documents',

    localDocuments:
      'Local document repository',

    selectedFolder:
      'Selected folder',

    folderNotSelected:
      'No document folder has been selected yet.',

    browserNotSupported:
      'Your browser does not support folder access. Please use Chrome or Edge.',

    folderPermission:
      'Please allow access to the selected document folder.',

    documentsLoaded:
      'documents loaded.',

    folderLoadError:
      'The document folder could not be loaded.',

    searchDocuments:
      'Search documents…',

    searchFullText:
      'Search filename, title, folder, category, tags and full PDF text…',

    advancedSearch:
      'Advanced search',

    clearFilters:
      'Clear filters',

    applyFilters:
      'Apply filters',

    sortBy:
      'Sort by',

    relevance:
      'Relevance',

    nameAsc:
      'Name A–Z',

    nameDesc:
      'Name Z–A',

    newest:
      'Newest',

    oldest:
      'Oldest',

    largest:
      'Largest',

    smallest:
      'Smallest',

    allStatuses:
      'All statuses',

    allCategories:
      'All categories',

    allDepartments:
      'All departments',

    allFolders:
      'All folders',

    dateFrom:
      'Date from',

    dateTo:
      'Date to',

    reset:
      'Reset',

    results:
      'results',

    page:
      'Page',

    openPage:
      'Open page',

    snippet:
      'Text match',

    recentActivity:
      'Recent activity',

    actions:
      'Actions',

    reviewQueue:
      'Review queue',

    categoryOverview:
      'Category overview',

    folderOverview:
      'Folder overview',

    documentation:
      'Documentation',

    metadata:
      'Metadata',

    fileInformation:
      'File information',

    aiAssistant:
      'AI document assistant',

    aiDescription:
      'Use AI to work with business documentation and selected documents.',

    aiSummary:
      'Summarize document',

    aiAnalysis:
      'Analyze document',

    aiExtract:
      'Extract information',

    aiCompare:
      'Compare documents',

    askDocumentation:
      'Ask documentation',

    assistantPrompt:
      'Request',

    assistantPlaceholder:
      'Ask a question, request an explanation, extract information, compare documents or analyze documentation…',

    askAI:
      'Ask AI',

    lecture:
      'Structured brief',

    lectureDescription:
      'Create a structured business briefing from selected documents.',

    topic:
      'Topic',

    topicPlaceholder:
      'What should the briefing explain?',

    length:
      'Length',

    short:
      'Short',

    standard:
      'Standard',

    detailed:
      'Detailed',

    createBrief:
      'Create briefing',

    articleWriting:
      'AI report writing',

    articleDescription:
      'Create a long, detailed professional report based on the selected documentation.',

    articlePlaceholder:
      'Describe the subject, issue, process, event or question the report should cover in depth…',

    articleMinimum:
      '10,000 words or more',

    writeReport:
      'Write report',

    question:
      'Question',

    questionPlaceholder:
      'Ask specifically about the selected company documentation…',

    answer:
      'Answer',

    sources:
      'Sources',

    sourceMaterialOnly:
      'Answers are based on the selected documentation.',

    preparing:
      'AI is preparing the response…',

    searching:
      'Searching document content…',

    preparingSearch:
      'Preparing document search index…',

    searchReady:
      'Document search ready',

    searchError:
      'Document search could not be prepared.',

    noRelevantPages:
      'No relevant document passages were found.',

    saveResult:
      'Save result',

    openResult:
      'Open',

    download:
      'Download',

    delete:
      'Delete',

    noResults:
      'No saved AI results yet.',

    created:
      'Created',

    loading:
      'Loading…',

    settingsDescription:
      'Local application settings and document repository information.',

    repository:
      'Repository',

    localOnly:
      'Local browser application',

    securityNote:
      'Documents remain in the selected local folder. AI receives extracted text passages rather than the PDF files themselves.',

    selectedDocuments:
      'selected documents',

    selectAll:
      'Select all',

    unselectAll:
      'Unselect all',

    chooseDocuments:
      'Choose documents',

    statusUpdated:
      'Document status updated.',

    metadataSaved:
      'Document metadata saved.',

    addedFavorite:
      'Document added to favorites.',

    removedFavorite:
      'Document removed from favorites.',

    archived:
      'Document archived.',

    restored:
      'Document restored.',

    needsReview:
      'Needs review',

    today:
      'Today',

    yesterday:
      'Yesterday',

    activityOpened:
      'Document opened',

    activityArchived:
      'Document archived',

    activityRestored:
      'Document restored',

    activityFavorite:
      'Favorite changed',

    activityMetadata:
      'Metadata updated'

  },


  sl: {

    appTitle:
      'Sistem za upravljanje dokumentacije',

    dashboard:
      'Nadzorna plošča',

    documents:
      'Dokumenti',

    search:
      'Iskanje',

    categories:
      'Kategorije',

    recent:
      'Nedavni',

    favorites:
      'Priljubljeni',

    review:
      'Pregled',

    archive:
      'Arhiv',

    ai:
      'AI dokumenti',

    saved:
      'AI rezultati',

    settings:
      'Nastavitve',

    language:
      'Jezik',

    overview:
      'Pregled',

    totalDocuments:
      'Vsi dokumenti',

    categoriesCount:
      'Kategorije',

    reviewCount:
      'Za pregled',

    favoriteCount:
      'Priljubljeni',

    activeDocuments:
      'Aktivni dokumenti',

    archivedDocuments:
      'Arhivirani dokumenti',

    expiredDocuments:
      'Potekli dokumenti',

    recentDocuments:
      'Nedavni dokumenti',

    noDocuments:
      'Dokumentov ni mogoče najti.',

    noFavorites:
      'Priljubljenih dokumentov še ni.',

    noRecent:
      'Nedavnih dokumentov še ni.',

    noReview:
      'Trenutno ni dokumentov za pregled.',

    noArchive:
      'Arhiv je prazen.',

    noCategories:
      'Kategorij ni mogoče najti.',

    documentsInCategory:
      'dokumentov',

    open:
      'Odpri',

    openPdf:
      'Odpri PDF',

    details:
      'Podrobnosti',

    documentDetails:
      'Podrobnosti dokumenta',

    documentId:
      'ID dokumenta',

    title:
      'Naslov',

    filename:
      'Ime datoteke',

    folder:
      'Mapa',

    category:
      'Kategorija',

    subcategory:
      'Podkategorija',

    department:
      'Oddelek',

    owner:
      'Odgovorna oseba',

    author:
      'Avtor',

    documentDate:
      'Datum dokumenta',

    lastModified:
      'Zadnja sprememba',

    fileSize:
      'Velikost datoteke',

    pages:
      'Strani',

    type:
      'Vrsta',

    status:
      'Status',

    version:
      'Različica',

    tags:
      'Oznake',

    notes:
      'Opombe',

    keywords:
      'Ključne besede',

    active:
      'Aktiven',

    draft:
      'Osnutek',

    inReview:
      'V pregledu',

    approved:
      'Potrjen',

    valid:
      'Veljaven',

    expired:
      'Potekel',

    archived:
      'Arhiviran',

    unknown:
      'Neznano',

    markFavorite:
      'Dodaj med priljubljene',

    removeFavorite:
      'Odstrani iz priljubljenih',

    markArchived:
      'Arhiviraj dokument',

    restoreDocument:
      'Obnovi dokument',

    markReview:
      'Pošlji v pregled',

    saveMetadata:
      'Shrani metapodatke',

    cancel:
      'Prekliči',

    back:
      'Nazaj',

    refresh:
      'Osveži',

    chooseFolder:
      'Izberi mapo dokumentov',

    changeFolder:
      'Spremeni mapo',

    refreshDocuments:
      'Osveži dokumente',

    localDocuments:
      'Lokalni repozitorij dokumentov',

    selectedFolder:
      'Izbrana mapa',

    folderNotSelected:
      'Mapa z dokumenti še ni izbrana.',

    browserNotSupported:
      'Tvoj brskalnik ne podpira dostopa do map. Uporabi Chrome ali Edge.',

    folderPermission:
      'Dovoli dostop do izbrane mape dokumentov.',

    documentsLoaded:
      'dokumentov naloženih.',

    folderLoadError:
      'Mape z dokumenti ni bilo mogoče naložiti.',

    searchDocuments:
      'Išči po dokumentih…',

    searchFullText:
      'Išči po imenu, naslovu, mapi, kategoriji, oznakah in besedilu PDF-ja…',

    advancedSearch:
      'Napredno iskanje',

    clearFilters:
      'Počisti filtre',

    applyFilters:
      'Uporabi filtre',

    sortBy:
      'Razvrsti',

    relevance:
      'Ustreznost',

    nameAsc:
      'Ime A–Ž',

    nameDesc:
      'Ime Ž–A',

    newest:
      'Najnovejši',

    oldest:
      'Najstarejši',

    largest:
      'Največji',

    smallest:
      'Najmanjši',

    allStatuses:
      'Vsi statusi',

    allCategories:
      'Vse kategorije',

    allDepartments:
      'Vsi oddelki',

    allFolders:
      'Vse mape',

    dateFrom:
      'Datum od',

    dateTo:
      'Datum do',

    reset:
      'Ponastavi',

    results:
      'rezultatov',

    page:
      'Stran',

    openPage:
      'Odpri stran',

    snippet:
      'Zadetek v besedilu',

    recentActivity:
      'Nedavna dejavnost',

    actions:
      'Dejanja',

    reviewQueue:
      'Čakalna vrsta za pregled',

    categoryOverview:
      'Pregled kategorij',

    folderOverview:
      'Pregled map',

    documentation:
      'Dokumentacija',

    metadata:
      'Metapodatki',

    fileInformation:
      'Podatki o datoteki',

    aiAssistant:
      'AI pomoč pri dokumentaciji',

    aiDescription:
      'Uporabi AI za delo s poslovno dokumentacijo in izbranimi dokumenti.',

    aiSummary:
      'Povzemi dokument',

    aiAnalysis:
      'Analiziraj dokument',

    aiExtract:
      'Izlušči podatke',

    aiCompare:
      'Primerjaj dokumente',

    askDocumentation:
      'Vprašaj dokumentacijo',

    assistantPrompt:
      'Zahteva',

    assistantPlaceholder:
      'Postavi vprašanje, zahtevaj razlago, izlušči podatke, primerjaj dokumente ali analiziraj dokumentacijo…',

    askAI:
      'Vprašaj AI',

    lecture:
      'Strukturirani povzetek',

    lectureDescription:
      'Ustvari strukturiran poslovni povzetek na podlagi izbranih dokumentov.',

    topic:
      'Tema',

    topicPlaceholder:
      'Kaj naj povzetek pojasni?',

    length:
      'Dolžina',

    short:
      'Kratek',

    standard:
      'Običajen',

    detailed:
      'Podroben',

    createBrief:
      'Ustvari povzetek',

    articleWriting:
      'AI pisanje poročil',

    articleDescription:
      'Ustvari dolg in podroben strokovni poslovni dokument na podlagi izbrane dokumentacije.',

    articlePlaceholder:
      'Opiši predmet, vprašanje, proces, dogodek ali problem, ki ga mora poročilo podrobno obravnavati…',

    articleMinimum:
      '10.000 besed ali več',

    writeReport:
      'Napiši poročilo',

    question:
      'Vprašanje',

    questionPlaceholder:
      'Postavi vprašanje posebej o izbrani poslovni dokumentaciji…',

    answer:
      'Odgovor',

    sources:
      'Viri',

    sourceMaterialOnly:
      'Odgovori temeljijo na izbrani dokumentaciji.',

    preparing:
      'AI pripravlja odgovor…',

    searching:
      'Iščem po vsebini dokumentov…',

    preparingSearch:
      'Pripravljam iskalni indeks dokumentov…',

    searchReady:
      'Iskanje po dokumentih je pripravljeno',

    searchError:
      'Iskalnega indeksa dokumentov ni bilo mogoče pripraviti.',

    noRelevantPages:
      'Ustreznih odlomkov dokumentov ni bilo mogoče najti.',

    saveResult:
      'Shrani rezultat',

    openResult:
      'Odpri',

    download:
      'Prenesi',

    delete:
      'Izbriši',

    noResults:
      'AI rezultatov še ni.',

    created:
      'Ustvarjeno',

    loading:
      'Nalaganje…',

    settingsDescription:
      'Lokalne nastavitve aplikacije in podatki o repozitoriju dokumentov.',

    repository:
      'Repozitorij',

    localOnly:
      'Lokalna aplikacija v brskalniku',

    securityNote:
      'Dokumenti ostanejo v izbrani lokalni mapi. AI prejme izluščene odlomke besedila in ne samih PDF-datotek.',

    selectedDocuments:
      'izbranih dokumentov',

    selectAll:
      'Označi vse',

    unselectAll:
      'Odznači vse',

    chooseDocuments:
      'Izberi dokumente',

    statusUpdated:
      'Status dokumenta je posodobljen.',

    metadataSaved:
      'Metapodatki dokumenta so shranjeni.',

    addedFavorite:
      'Dokument je dodan med priljubljene.',

    removedFavorite:
      'Dokument je odstranjen iz priljubljenih.',

    archived:
      'Dokument je arhiviran.',

    restored:
      'Dokument je obnovljen.',

    needsReview:
      'Za pregled',

    today:
      'Danes',

    yesterday:
      'Včeraj',

    activityOpened:
      'Dokument odprt',

    activityArchived:
      'Dokument arhiviran',

    activityRestored:
      'Dokument obnovljen',

    activityFavorite:
      'Spremenjeni priljubljeni',

    activityMetadata:
      'Metapodatki posodobljeni'

  }

};


/* =========================================================
   STATE
   ========================================================= */

let state = {

  screen:
    'dashboard',

  query:
    '',

  searchSort:
    'relevance',

  searchStatus:
    'all',

  searchCategory:
    'all',

  searchDepartment:
    'all',

  searchFolder:
    'all',

  searchDateFrom:
    '',

  searchDateTo:
    '',

  searchApplied:
    false,

  selectedDocumentIds:
    [],

  documentId:
    '',

  sourceDocumentId:
    '',

  lang:
    'sl',

  toast:
    '',

  searchIndex:
    [],

  searchReady:
    false,

  searchLoading:
    false,

  creationType:
    'assistant',

  selectedAiDocuments:
    [],

  assistantPrompt:
    '',

  assistantGenerating:
    false,

  generatedAssistant:
    '',

  assistantError:
    '',

  assistantPassages:
    [],

  briefTopic:
    '',

  briefLength:
    'standard',

  briefGenerating:
    false,

  generatedBrief:
    '',

  briefError:
    '',

  briefPassages:
    [],

  articleTopic:
    '',

  articleGenerating:
    false,

  generatedArticle:
    '',

  articleError:
    '',

  articlePassages:
    [],

  askPrompt:
    '',

  askGenerating:
    false,

  generatedAnswer:
    '',

  askError:
    '',

  askPassages:
    [],

  works:
    [],

  favorites:
    [],

  recent:
    [],

  metadata:
    {},

  activity:
    [],

  localFolderName:
    '',

  activeCategory:
    '',

  activeStatus:
    'all',

  activeDepartment:
    '',

  documentsView:
    'list'

};


/* =========================================================
   LOAD SAVED STATE
   ========================================================= */

try {

  const saved =
    JSON.parse(
      localStorage.getItem(
        'dms-local-state'
      ) ||
      '{}'
    );

  Object.assign(
    state,
    saved
  );

} catch (error) {

  console.warn(
    'Could not load saved DMS state.',
    error
  );

}


/* =========================================================
   STATE VALIDATION
   ========================================================= */

if (
  state.lang !== 'en' &&
  state.lang !== 'sl'
) {

  state.lang =
    'sl';

}

if (
  !Array.isArray(
    state.selectedDocumentIds
  )
) {

  state.selectedDocumentIds =
    [];

}

if (
  !Array.isArray(
    state.selectedAiDocuments
  )
) {

  state.selectedAiDocuments =
    [];

}

if (
  !Array.isArray(
    state.works
  )
) {

  state.works =
    [];

}

if (
  !Array.isArray(
    state.favorites
  )
) {

  state.favorites =
    [];

}

if (
  !Array.isArray(
    state.recent
  )
) {

  state.recent =
    [];

}

if (
  !Array.isArray(
    state.activity
  )
) {

  state.activity =
    [];

}

if (
  !Array.isArray(
    state.searchIndex
  )
) {

  state.searchIndex =
    [];

}

if (
  !state.metadata ||
  typeof state.metadata !==
    'object'
) {

  state.metadata =
    {};

}

if (
  ![
    'relevance',
    'nameAsc',
    'nameDesc',
    'newest',
    'oldest',
    'largest',
    'smallest'
  ].includes(
    state.searchSort
  )
) {

  state.searchSort =
    'relevance';

}


/* =========================================================
   TRANSLATION
   ========================================================= */

function t(
  key
) {

  return (
    I18N[
      state.lang
    ]?.[
      key
    ] ||
    I18N.en[
      key
    ] ||
    key
  );

}


/* =========================================================
   SAVE STATE
   ========================================================= */

function save() {

  try {

    localStorage.setItem(
      'dms-local-state',
      JSON.stringify({

        screen:
          state.screen,

        query:
          state.query,

        searchSort:
          state.searchSort,

        searchStatus:
          state.searchStatus,

        searchCategory:
          state.searchCategory,

        searchDepartment:
          state.searchDepartment,

        searchFolder:
          state.searchFolder,

        searchDateFrom:
          state.searchDateFrom,

        searchDateTo:
          state.searchDateTo,

        selectedDocumentIds:
          state.selectedDocumentIds,

        documentId:
          state.documentId,

        sourceDocumentId:
          state.sourceDocumentId,

        lang:
          state.lang,

        selectedAiDocuments:
          state.selectedAiDocuments,

        assistantPrompt:
          state.assistantPrompt,

        generatedAssistant:
          state.generatedAssistant,

        assistantError:
          state.assistantError,

        assistantPassages:
          state.assistantPassages,

        briefTopic:
          state.briefTopic,

        briefLength:
          state.briefLength,

        generatedBrief:
          state.generatedBrief,

        briefError:
          state.briefError,

        briefPassages:
          state.briefPassages,

        articleTopic:
          state.articleTopic,

        generatedArticle:
          state.generatedArticle,

        articleError:
          state.articleError,

        articlePassages:
          state.articlePassages,

        askPrompt:
          state.askPrompt,

        generatedAnswer:
          state.generatedAnswer,

        askError:
          state.askError,

        askPassages:
          state.askPassages,

        works:
          state.works,

        favorites:
          state.favorites,

        recent:
          state.recent,

        metadata:
          state.metadata,

        activity:
          state.activity,

        localFolderName:
          state.localFolderName,

        activeCategory:
          state.activeCategory,

        activeStatus:
          state.activeStatus,

        activeDepartment:
          state.activeDepartment,

        documentsView:
          state.documentsView

      })
    );

  } catch (error) {

    console.warn(
      'Could not save DMS state.',
      error
    );

  }

}


/* =========================================================
   HTML ESCAPING
   ========================================================= */

function escapeHtml(
  value
) {

  return String(
    value ??
    ''
  )
    .replace(
      /&/g,
      '&amp;'
    )
    .replace(
      /</g,
      '&lt;'
    )
    .replace(
      />/g,
      '&gt;'
    )
    .replace(
      /"/g,
      '&quot;'
    )
    .replace(
      /'/g,
      '&#039;'
    );

}


function escapeAttribute(
  value
) {

  return String(
    value ??
    ''
  )
    .replace(
      /\\/g,
      '\\\\'
    )
    .replace(
      /'/g,
      "\\'"
    );

}


/* =========================================================
   GENERAL NAVIGATION
   ========================================================= */

function go(
  screen
) {

  state.screen =
    screen;

  save();

  render();

  window.scrollTo({
    top:
      0,
    behavior:
      'smooth'
  });

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function setLanguage(
  lang
) {

  if (
    lang !== 'en' &&
    lang !== 'sl'
  ) {

    return;

  }

  state.lang =
    lang;

  save();

  render();

}


/* =========================================================
   TOAST
   ========================================================= */

function toast(
  message
) {

  state.toast =
    message;

  render();

  window.clearTimeout(
    window.__DMSToastTimer
  );

  window.__DMSToastTimer =
    window.setTimeout(
      () => {

        state.toast =
          '';

        render();

      },
      2200
    );

}


/* =========================================================
   LOCAL FOLDER DATABASE
   ========================================================= */

function openLocalBooksDatabase() {

  return new Promise(
    (
      resolve,
      reject
    ) => {

      if (
        !('indexedDB' in window)
      ) {

        reject(
          new Error(
            'IndexedDB is not supported.'
          )
        );

        return;

      }

      const request =
        indexedDB.open(
          LOCAL_BOOKS_DB_NAME,
          LOCAL_BOOKS_DB_VERSION
        );

      request.onupgradeneeded =
        function () {

          const db =
            request.result;

          if (
            !db.objectStoreNames.contains(
              LOCAL_BOOKS_STORE_NAME
            )
          ) {

            db.createObjectStore(
              LOCAL_BOOKS_STORE_NAME
            );

          }

        };

      request.onsuccess =
        function () {

          resolve(
            request.result
          );

        };

      request.onerror =
        function () {

          reject(
            request.error ||
            new Error(
              'Local database error.'
            )
          );

        };

    }
  );

}


function saveLocalBooksDirectoryHandle(
  handle
) {

  return openLocalBooksDatabase()
    .then(
      db => {

        return new Promise(
          (
            resolve,
            reject
          ) => {

            const transaction =
              db.transaction(
                LOCAL_BOOKS_STORE_NAME,
                'readwrite'
              );

            const store =
              transaction.objectStore(
                LOCAL_BOOKS_STORE_NAME
              );

            const request =
              store.put(
                handle,
                LOCAL_BOOKS_HANDLE_KEY
              );

            request.onsuccess =
              function () {

                db.close();

                resolve();

              };

            request.onerror =
              function () {

                db.close();

                reject(
                  request.error
                );

              };

          }
        );

      }
    );

}


function loadSavedLocalBooksDirectoryHandle() {

  return openLocalBooksDatabase()
    .then(
      db => {

        return new Promise(
          (
            resolve,
            reject
          ) => {

            const transaction =
              db.transaction(
                LOCAL_BOOKS_STORE_NAME,
                'readonly'
              );

            const store =
              transaction.objectStore(
                LOCAL_BOOKS_STORE_NAME
              );

            const request =
              store.get(
                LOCAL_BOOKS_HANDLE_KEY
              );

            request.onsuccess =
              function () {

                const handle =
                  request.result ||
                  null;

                db.close();

                resolve(
                  handle
                );

              };

            request.onerror =
              function () {

                db.close();

                reject(
                  request.error
                );

              };

          }
        );

      }
    );

}


/* =========================================================
   DIRECTORY PERMISSION
   ========================================================= */

async function verifyDirectoryPermission(
  handle,
  requestIfNeeded
) {

  if (!handle) {

    return false;

  }

  try {

    if (
      typeof handle.queryPermission ===
      'function'
    ) {

      const permission =
        await handle.queryPermission({
          mode:
            'read'
        });

      if (
        permission ===
        'granted'
      ) {

        return true;

      }

      if (
        permission ===
        'denied'
      ) {

        return false;

      }

    }

    if (
      requestIfNeeded &&
      typeof handle.requestPermission ===
      'function'
    ) {

      const permission =
        await handle.requestPermission({
          mode:
            'read'
        });

      return (
        permission ===
        'granted'
      );

    }

  } catch (error) {

    console.warn(
      'Folder permission error.',
      error
    );

  }

  return false;

}


/* =========================================================
   RECURSIVE PDF SCAN
   ========================================================= */

async function collectLocalPdfFiles(
  directoryHandle,
  relativePath = ''
) {

  const results =
    [];

  for await (
    const [
      name,
      entry
    ]
    of directoryHandle.entries()
  ) {

    if (
      entry.kind ===
      'file'
    ) {

      if (
        /\.pdf$/i.test(
          name
        )
      ) {

        const path =
          relativePath
            ? (
                relativePath +
                '/' +
                name
              )
            : name;

        results.push({

          name,

          path,

          handle:
            entry

        });

      }

    } else if (
      entry.kind ===
      'directory'
    ) {

      const childPath =
        relativePath
          ? (
              relativePath +
              '/' +
              name
            )
          : name;

      const children =
        await collectLocalPdfFiles(
          entry,
          childPath
        );

      results.push(
        ...children
      );

    }

  }

  return results;

}


/* =========================================================
   FILE SIZE
   ========================================================= */

function formatFileSize(
  bytes
) {

  const value =
    Number(
      bytes ||
      0
    );

  if (
    !Number.isFinite(
      value
    ) ||
    value <=
      0
  ) {

    return '—';

  }

  const units =
    [
      'B',
      'KB',
      'MB',
      'GB'
    ];

  let size =
    value;

  let index =
    0;

  while (
    size >=
      1024 &&
    index <
      units.length -
        1
  ) {

    size /=
      1024;

    index++;

  }

  return (
    size >=
      10
      ? size.toFixed(0)
      : size.toFixed(1)
  ) +
  ' ' +
  units[index];

}


/* =========================================================
   CATEGORY FROM FOLDER
   ========================================================= */

function getPathParts(
  path
) {

  return String(
    path ||
    ''
  )
    .split('/')
    .filter(
      Boolean
    );

}


function getDocumentCategoryFromPath(
  path
) {

  const parts =
    getPathParts(
      path
    );

  if (
    parts.length <=
    1
  ) {

    return (
      state.lang ===
      'sl'
        ? 'Nerazvrščeno'
        : 'Uncategorized'
    );

  }

  return (
    parts[0]
  );

}


function getDocumentSubcategoryFromPath(
  path
) {

  const parts =
    getPathParts(
      path
    );

  if (
    parts.length <=
    2
  ) {

    return '';

  }

  return (
    parts[1]
  );

}


/* =========================================================
   BUILD DOCUMENT OBJECTS
   ========================================================= */

async function buildLocalBooksFromDirectory(
  directoryHandle
) {

  const files =
    await collectLocalPdfFiles(
      directoryHandle
    );

  LOCAL_BOOK_FILES =
    new Map();

  const documents =
    [];

  for (
    const fileInfo
    of files
  ) {

    const title =
      String(
        fileInfo.name ||
        ''
      )
        .replace(
          /\.pdf$/i,
          ''
        );

    const pdfKey =
      'local://' +
      fileInfo.path;

    const id =
      'DOC-' +
      encodeURIComponent(
        fileInfo.path
      );

    let fileSize =
      0;

    let lastModified =
      '';

    try {

      const file =
        await fileInfo.handle.getFile();

      fileSize =
        file.size ||
        0;

      lastModified =
        file.lastModified
          ? new Date(
              file.lastModified
            ).toISOString()
          : '';

    } catch (error) {

      console.warn(
        'Could not inspect file.',
        error
      );

    }

    LOCAL_BOOK_FILES.set(
      pdfKey,
      fileInfo.handle
    );

    documents.push({

      id,

      short:
        title,

      title,

      author:
        '',

      script:
        'PDF',

      filename:
        fileInfo.name,

      path:
        fileInfo.path,

      pdf:
        pdfKey,

      category:
        getDocumentCategoryFromPath(
          fileInfo.path
        ),

      subcategory:
        getDocumentSubcategoryFromPath(
          fileInfo.path
        ),

      department:
        '',

      owner:
        '',

      documentDate:
        '',

      lastModified,

      fileSize,

      pages:
        0,

      type:
        'PDF'

    });

  }

  documents.sort(
    (
      a,
      b
    ) =>
      String(
        a.title ||
        ''
      ).localeCompare(
        String(
          b.title ||
          ''
        ),
        undefined,
        {
          sensitivity:
            'base'
        }
      )
  );

  return documents;

}


/* =========================================================
   DOCUMENT METADATA
   ========================================================= */

function getMetadata(
  document
) {

  if (
    !document ||
    !document.id
  ) {

    return {};

  }

  const saved =
    state.metadata[
      document.id
    ];

  if (
    saved &&
    typeof saved ===
      'object'
  ) {

    return {

      category:
        saved.category ??
        document.category ??
        '',

      subcategory:
        saved.subcategory ??
        document.subcategory ??
        '',

      department:
        saved.department ??
        document.department ??
        '',

      owner:
        saved.owner ??
        document.owner ??
        '',

      author:
        saved.author ??
        document.author ??
        '',

      documentDate:
        saved.documentDate ??
        document.documentDate ??
        '',

      status:
        saved.status ??
        'active',

      version:
        saved.version ??
        '1.0',

      tags:
        Array.isArray(
          saved.tags
        )
          ? saved.tags
          : [],

      keywords:
        saved.keywords ??
        '',

      notes:
        saved.notes ??
        '',

      reviewDate:
        saved.reviewDate ??
        '',

      expiryDate:
        saved.expiryDate ??
        ''

    };

  }

  return {

    category:
      document.category ||
      '',

    subcategory:
      document.subcategory ||
      '',

    department:
      document.department ||
      '',

    owner:
      document.owner ||
      '',

    author:
      document.author ||
      '',

    documentDate:
      document.documentDate ||
      '',

    status:
      'active',

    version:
      '1.0',

    tags:
      [],

    keywords:
      '',

    notes:
      '',

    reviewDate:
      '',

    expiryDate:
      ''

  };

}


function getDocumentStatus(
  document
) {

  const metadata =
    getMetadata(
      document
    );

  if (
    metadata.expiryDate
  ) {

    const expiry =
      new Date(
        metadata.expiryDate
      );

    if (
      !Number.isNaN(
        expiry.getTime()
      ) &&
      expiry <
        new Date()
    ) {

      return 'expired';

    }

  }

  return (
    metadata.status ||
    'active'
  );

}


/* =========================================================
   STATUS LABEL
   ========================================================= */

function statusLabel(
  status
) {

  const map = {

    active:
      t('active'),

    draft:
      t('draft'),

    review:
      t('inReview'),

    approved:
      t('approved'),

    valid:
      t('valid'),

    expired:
      t('expired'),

    archived:
      t('archived')

  };

  return (
    map[
      status
    ] ||
    t('unknown')
  );

}


/* =========================================================
   STATUS CLASS
   ========================================================= */

function statusClass(
  status
) {

  const map = {

    active:
      'status-approved',

    draft:
      'status-draft',

    review:
      'status-review',

    approved:
      'status-approved',

    valid:
      'status-valid',

    expired:
      'status-expired',

    archived:
      'status-archived'

  };

  return (
    map[
      status
    ] ||
    'status-draft'
  );

}


/* =========================================================
   DATE FORMATTING
   ========================================================= */

function formatDate(
  value
) {

  if (!value) {
    return '—';
  }

  try {

    return new Date(
      value
    ).toLocaleDateString(
      state.lang ===
      'sl'
        ? 'sl-SI'
        : 'en-US',
      {
        year:
          'numeric',

        month:
          '2-digit',

        day:
          '2-digit'
      }
    );

  } catch (error) {

    return '—';

  }

}


function formatDateTime(
  value
) {

  if (!value) {
    return '—';
  }

  try {

    return new Date(
      value
    ).toLocaleString(
      state.lang ===
      'sl'
        ? 'sl-SI'
        : 'en-US',
      {
        dateStyle:
          'medium',

        timeStyle:
          'short'
      }
    );

  } catch (error) {

    return '—';

  }

}


/* =========================================================
   DOCUMENT LOOKUP
   ========================================================= */

function getDocumentById(
  id
) {

  return (
    BOOKS.find(
      document =>
        document &&
        document.id ===
        id
    ) ||
    null
  );

}


/* =========================================================
   OPEN DOCUMENT FOLDER
   ========================================================= */

async function loadBooksFromLocalFolder(
  handle,
  showMessage = false
) {

  try {

    if (!handle) {

      throw new Error(
        'No folder handle.'
      );

    }

    const permission =
      await verifyDirectoryPermission(
        handle,
        false
      );

    if (!permission) {

      if (
        showMessage
      ) {

        toast(
          t('folderPermission')
        );

      }

      return false;

    }

    LOCAL_BOOKS_DIRECTORY_HANDLE =
      handle;

    BOOKS =
      await buildLocalBooksFromDirectory(
        handle
      );

    state.localFolderName =
      handle.name ||
      '';

    const validIds =
      new Set(
        BOOKS.map(
          document =>
            document.id
        )
      );

    state.selectedDocumentIds =
      state.selectedDocumentIds.filter(
        id =>
          validIds.has(
            id
          )
      );

    state.selectedAiDocuments =
      state.selectedAiDocuments.filter(
        id =>
          validIds.has(
            id
          )
      );

    state.favorites =
      state.favorites.filter(
        id =>
          validIds.has(
            id
          )
      );

    state.recent =
      state.recent.filter(
        id =>
          validIds.has(
            id
          )
      );

    state.searchIndex =
      [];

    state.searchReady =
      false;

    state.searchLoading =
      false;

    try {

      await saveLocalBooksDirectoryHandle(
        handle
      );

    } catch (error) {

      console.warn(
        'Could not persist folder handle.',
        error
      );

    }

    save();

    render();

    if (
      showMessage
    ) {

      toast(
        BOOKS.length +
        ' ' +
        t(
          'documentsLoaded'
        )
      );

    }

    return true;

  } catch (error) {

    console.error(
      'Could not load local documents:',
      error
    );

    if (
      showMessage
    ) {

      toast(
        t('folderLoadError')
      );

    }

    return false;

  }

}


/* =========================================================
   CHOOSE DOCUMENT FOLDER
   ========================================================= */

async function chooseBooksFolder() {

  if (
    typeof window.showDirectoryPicker !==
    'function'
  ) {

    toast(
      t('browserNotSupported')
    );

    return;

  }

  try {

    const handle =
      await window.showDirectoryPicker({

        mode:
          'read',

        id:
          'dms-document-repository'

      });

    const permission =
      await verifyDirectoryPermission(
        handle,
        true
      );

    if (!permission) {

      toast(
        t('folderPermission')
      );

      return;

    }

    await loadBooksFromLocalFolder(
      handle,
      true
    );

  } catch (error) {

    if (
      error?.name ===
      'AbortError'
    ) {

      return;

    }

    console.error(
      'Choose document folder error:',
      error
    );

    toast(
      t('folderLoadError')
    );

  }

}


/* =========================================================
   REFRESH DOCUMENTS
   ========================================================= */

async function refreshBooks() {

  if (
    !LOCAL_BOOKS_DIRECTORY_HANDLE
  ) {

    try {

      LOCAL_BOOKS_DIRECTORY_HANDLE =
        await loadSavedLocalBooksDirectoryHandle();

    } catch (error) {

      console.warn(
        'Could not restore saved folder handle.',
        error
      );

    }

  }

  if (
    !LOCAL_BOOKS_DIRECTORY_HANDLE
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej izberi mapo dokumentov.'
        : 'Please choose a document folder first.'
    );

    return;

  }

  const permission =
    await verifyDirectoryPermission(
      LOCAL_BOOKS_DIRECTORY_HANDLE,
      true
    );

  if (!permission) {

    toast(
      t('folderPermission')
    );

    return;

  }

  await loadBooksFromLocalFolder(
    LOCAL_BOOKS_DIRECTORY_HANDLE,
    true
  );

}


/* =========================================================
   RESTORE DOCUMENT FOLDER
   ========================================================= */

async function restoreLocalBooksFolder() {

  try {

    const handle =
      await loadSavedLocalBooksDirectoryHandle();

    if (!handle) {

      render();

      return;

    }

    const permission =
      await verifyDirectoryPermission(
        handle,
        false
      );

    if (!permission) {

      render();

      return;

    }

    await loadBooksFromLocalFolder(
      handle,
      false
    );

  } catch (error) {

    console.warn(
      'Could not restore local document folder.',
      error
    );

    render();

  }

}


/* =========================================================
   ACTIVITY LOG
   ========================================================= */

function addActivity(
  type,
  document,
  extra = ''
) {

  if (!document) {
    return;
  }

  const labels = {

    opened:
      t('activityOpened'),

    archived:
      t('activityArchived'),

    restored:
      t('activityRestored'),

    favorite:
      t('activityFavorite'),

    metadata:
      t('activityMetadata')

  };

  const item = {

    id:
      'activity-' +
      Date.now() +
      '-' +
      Math.random()
        .toString(
          36
        )
        .slice(
          2,
          7
        ),

    type,

    documentId:
      document.id,

    documentTitle:
      document.title,

    label:
      labels[type] ||
      type,

    extra,

    createdAt:
      new Date().toISOString()

  };

  state.activity = [

    item,

    ...state.activity

  ].slice(
    0,
    100
  );

  save();

}


/* =========================================================
   FAVORITE
   ========================================================= */

function toggleFavorite(
  documentId
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  const exists =
    state.favorites.includes(
      documentId
    );

  if (exists) {

    state.favorites =
      state.favorites.filter(
        id =>
          id !==
          documentId
      );

    toast(
      t('removedFavorite')
    );

  } else {

    state.favorites = [

      documentId,

      ...state.favorites.filter(
        id =>
          id !==
          documentId
      )

    ];

    toast(
      t('addedFavorite')
    );

  }

  addActivity(
    'favorite',
    document
  );

  save();

  render();

}


/* =========================================================
   RECENT DOCUMENTS
   ========================================================= */

function addRecentDocument(
  document
) {

  if (!document) {
    return;
  }

  state.recent = [

    document.id,

    ...state.recent.filter(
      id =>
        id !==
        document.id
    )

  ].slice(
    0,
    30
  );

  addActivity(
    'opened',
    document
  );

  save();

}


/* =========================================================
   OPEN DOCUMENT
   ========================================================= */

function openDocument(
  documentId
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  state.documentId =
    document.id;

  state.sourceDocumentId =
    document.id;

  addRecentDocument(
    document
  );

  openPdf(
    document.pdf
  );

}


/* =========================================================
   DOCUMENT STATUS
   ========================================================= */

function updateDocumentStatus(
  documentId,
  status
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  const metadata =
    getMetadata(
      document
    );

  state.metadata[
    document.id
  ] = {

    ...metadata,

    status

  };

  if (
    status ===
    'archived'
  ) {

    addActivity(
      'archived',
      document
    );

    toast(
      t('archived')
    );

  } else {

    addActivity(
      'metadata',
      document
    );

    toast(
      t('statusUpdated')
    );

  }

  save();

  render();

}


/* =========================================================
   RESTORE DOCUMENT
   ========================================================= */

function restoreDocument(
  documentId
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  const metadata =
    getMetadata(
      document
    );

  state.metadata[
    document.id
  ] = {

    ...metadata,

    status:
      'active'

  };

  addActivity(
    'restored',
    document
  );

  save();

  toast(
    t('restored')
  );

  render();

}


/* =========================================================
   METADATA SAVE
   ========================================================= */

function saveDocumentMetadata(
  documentId
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  const fields = {

    category:
      document.querySelector(
        '#metadata-category'
      )?.value ||
      '',

    subcategory:
      document.querySelector(
        '#metadata-subcategory'
      )?.value ||
      '',

    department:
      document.querySelector(
        '#metadata-department'
      )?.value ||
      '',

    owner:
      document.querySelector(
        '#metadata-owner'
      )?.value ||
      '',

    author:
      document.querySelector(
        '#metadata-author'
      )?.value ||
      '',

    documentDate:
      document.querySelector(
        '#metadata-document-date'
      )?.value ||
      '',

    status:
      document.querySelector(
        '#metadata-status'
      )?.value ||
      'active',

    version:
      document.querySelector(
        '#metadata-version'
      )?.value ||
      '1.0',

    keywords:
      document.querySelector(
        '#metadata-keywords'
      )?.value ||
      '',

    tags:
      (
        document.querySelector(
          '#metadata-tags'
        )?.value ||
        ''
      )
        .split(',')
        .map(
          value =>
            value.trim()
        )
        .filter(
          Boolean
        ),

    notes:
      document.querySelector(
        '#metadata-notes'
      )?.value ||
      '',

    reviewDate:
      document.querySelector(
        '#metadata-review-date'
      )?.value ||
      '',

    expiryDate:
      document.querySelector(
        '#metadata-expiry-date'
      )?.value ||
      ''

  };

  state.metadata[
    document.id
  ] =
    fields;

  addActivity(
    'metadata',
    document
  );

  save();

  toast(
    t('metadataSaved')
  );

  render();

}


/* =========================================================
   SELECT ALL DOCUMENTS
   ========================================================= */

function toggleAllDocuments() {

  const allIds =
    BOOKS
      .filter(
        document =>
          getDocumentStatus(
            document
          ) !==
          'archived'
      )
      .map(
        document =>
          document.id
      );

  const allSelected =
    allIds.length >
      0 &&
    allIds.every(
      id =>
        state.selectedDocumentIds.includes(
          id
        )
    );

  state.selectedDocumentIds =
    allSelected
      ? []
      : allIds;

  save();

  render();

}


/* =========================================================
   TOGGLE DOCUMENT SELECTION
   ========================================================= */

function toggleDocumentSelection(
  documentId
) {

  if (
    state.selectedDocumentIds.includes(
      documentId
    )
  ) {

    state.selectedDocumentIds =
      state.selectedDocumentIds.filter(
        id =>
          id !==
          documentId
      );

  } else {

    state.selectedDocumentIds = [

      ...state.selectedDocumentIds,

      documentId

    ];

  }

  save();

  render();

}


/* =========================================================
   TOGGLE AI DOCUMENT
   ========================================================= */

function toggleAiDocument(
  documentId
) {

  if (
    state.selectedAiDocuments.includes(
      documentId
    )
  ) {

    state.selectedAiDocuments =
      state.selectedAiDocuments.filter(
        id =>
          id !==
          documentId
      );

  } else {

    state.selectedAiDocuments = [

      ...state.selectedAiDocuments,

      documentId

    ];

  }

  save();

  render();

}


/* =========================================================
   DOCUMENT TITLE
   ========================================================= */

function documentTitle(
  document
) {

  if (!document) {
    return '';
  }

  const metadata =
    getMetadata(
      document
    );

  return (
    document.title ||
    metadata.title ||
    document.filename ||
    ''
  );

}


/* =========================================================
   DOCUMENT TAG HTML
   ========================================================= */

function renderTags(
  tags
) {

  if (
    !Array.isArray(
      tags
    ) ||
    !tags.length
  ) {

    return '';

  }

  return `

    <div class="tag-list">

      ${tags
        .slice(
          0,
          8
        )
        .map(
          tag => `

            <span class="tag">

              ${escapeHtml(
                tag
              )}

            </span>

          `
        )
        .join('')}

    </div>

  `;

}


/* =========================================================
   DOCUMENT STATUS HTML
   ========================================================= */

function renderStatus(
  document
) {

  const status =
    getDocumentStatus(
      document
    );

  return `

    <span
      class="status ${
        statusClass(
          status
        )
      }">

      ${escapeHtml(
        statusLabel(
          status
        )
      )}

    </span>

  `;

}


/* =========================================================
   DOCUMENT SORTING
   ========================================================= */

function sortDocuments(
  documents,
  sort
) {

  const list =
    [
      ...documents
    ];

  list.sort(
    (
      a,
      b
    ) => {

      const aMeta =
        getMetadata(
          a
        );

      const bMeta =
        getMetadata(
          b
        );

      if (
        sort ===
        'nameAsc'
      ) {

        return documentTitle(
          a
        ).localeCompare(
          documentTitle(
            b
          ),
          undefined,
          {
            sensitivity:
              'base'
          }
        );

      }

      if (
        sort ===
        'nameDesc'
      ) {

        return documentTitle(
          b
        ).localeCompare(
          documentTitle(
            a
          ),
          undefined,
          {
            sensitivity:
              'base'
          }
        );

      }

      if (
        sort ===
        'newest'
      ) {

        return (
          new Date(
            b.lastModified ||
            0
          ).getTime() -
          new Date(
            a.lastModified ||
            0
          ).getTime()
        );

      }

      if (
        sort ===
        'oldest'
      ) {

        return (
          new Date(
            a.lastModified ||
            0
          ).getTime() -
          new Date(
            b.lastModified ||
            0
          ).getTime()
        );

      }

      if (
        sort ===
        'largest'
      ) {

        return (
          Number(
            b.fileSize ||
            0
          ) -
          Number(
            a.fileSize ||
            0
          )
        );

      }

      if (
        sort ===
        'smallest'
      ) {

        return (
          Number(
            a.fileSize ||
            0
          ) -
          Number(
            b.fileSize ||
            0
          )
        );

      }

      const aStatus =
        aMeta.status ||
        'active';

      const bStatus =
        bMeta.status ||
        'active';

      if (
        aStatus ===
          'review' &&
        bStatus !==
          'review'
      ) {

        return -1;

      }

      if (
        bStatus ===
          'review' &&
        aStatus !==
          'review'
      ) {

        return 1;

      }

      return documentTitle(
        a
      ).localeCompare(
        documentTitle(
          b
        ),
        undefined,
        {
          sensitivity:
            'base'
        }
      );

    }
  );

  return list;

}


/* =========================================================
   GLOBAL FILTER HELPERS
   ========================================================= */

function getCategories() {

  return [
    ...new Set(
      BOOKS.map(
        document =>
          getMetadata(
            document
          ).category ||
          ''
      )
      .filter(
        Boolean
      )
    )
  ]
    .sort(
      (
        a,
        b
      ) =>
        a.localeCompare(
          b,
          undefined,
          {
            sensitivity:
              'base'
          }
        )
    );

}


function getDepartments() {

  return [
    ...new Set(
      BOOKS.map(
        document =>
          getMetadata(
            document
          ).department ||
          ''
      )
      .filter(
        Boolean
      )
    )
  ]
    .sort(
      (
        a,
        b
      ) =>
        a.localeCompare(
          b,
          undefined,
          {
            sensitivity:
              'base'
          }
        )
    );

}


function getFolders() {

  return [
    ...new Set(
      BOOKS.map(
        document =>
          getPathParts(
            document.path
          )
            .slice(
              0,
              -1
            )
            .join('/')
      )
      .filter(
        Boolean
      )
    )
  ]
    .sort(
      (
        a,
        b
      ) =>
        a.localeCompare(
          b,
          undefined,
          {
            sensitivity:
              'base'
          }
        )
    );

}


/* =========================================================
   DOCUMENT MATCH
   ========================================================= */

function matchesDocumentQuery(
  document,
  query
) {

  if (!query) {

    return true;

  }

  const metadata =
    getMetadata(
      document
    );

  const tagText =
    Array.isArray(
      metadata.tags
    )
      ? metadata.tags.join(' ')
      : '';

  const haystack =
    normalizeSearchText(
      [
        document.title,
        document.filename,
        document.path,
        metadata.category,
        metadata.subcategory,
        metadata.department,
        metadata.owner,
        metadata.author,
        metadata.keywords,
        tagText
      ].join(' ')
    );

  return haystack.includes(
    normalizeSearchText(
      query
    )
  );

}


/* =========================================================
   NORMALIZE SEARCH TEXT
   ========================================================= */

function normalizeSearchText(
  value
) {

  return String(
    value ||
    ''
  )
    .normalize(
      'NFD'
    )
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .toLowerCase();

}


/* =========================================================
   PDF.JS CONFIGURATION
   ========================================================= */

const PDFJS_VERSION =
  '6.2.108';

const SEARCH_DB_NAME =
  'universal-ai-library-search-db';

const SEARCH_DB_VERSION =
  1;

const SEARCH_STORE_NAME =
  'pages';

let pdfjsPromise =
  null;


/* =========================================================
   GET PDF.JS
   ========================================================= */

async function getPdfJs() {

  if (
    !pdfjsPromise
  ) {

    pdfjsPromise =
      import(
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@' +
        PDFJS_VERSION +
        '/build/pdf.min.mjs'
      )
      .then(
        pdfjsLib => {

          pdfjsLib
            .GlobalWorkerOptions
            .workerSrc =
              'https://cdn.jsdelivr.net/npm/pdfjs-dist@' +
              PDFJS_VERSION +
              '/build/pdf.worker.min.mjs';

          return pdfjsLib;

        }
      );

  }

  return pdfjsPromise;

}


/* =========================================================
   GET PDF SOURCE
   ========================================================= */

async function getPdfSource(
  pdfKey
) {

  if (
    String(
      pdfKey
    ).startsWith(
      'local://'
    )
  ) {

    const handle =
      LOCAL_BOOK_FILES.get(
        pdfKey
      );

    if (!handle) {

      throw new Error(
        'Local PDF handle not found.'
      );

    }

    return handle;

  }

  return pdfKey;

}


/* =========================================================
   OPEN LOCAL PDF
   ========================================================= */

async function openLocalPdf(
  pdfKey,
  popup
) {

  try {

    const handle =
      LOCAL_BOOK_FILES.get(
        pdfKey
      );

    if (!handle) {

      throw new Error(
        'Local PDF handle not found.'
      );

    }

    const file =
      await handle.getFile();

    const url =
      URL.createObjectURL(
        file
      );

    popup.location.href =
      url;

    setTimeout(
      () => {

        URL.revokeObjectURL(
          url
        );

      },
      300000
    );

  } catch (error) {

    console.error(
      'Could not open local PDF.',
      error
    );

    try {

      popup.close();

    } catch (closeError) {}

    toast(
      t('folderLoadError')
    );

  }

}


/* =========================================================
   OPEN LOCAL PDF PAGE
   ========================================================= */

async function openLocalPdfPage(
  pdfKey,
  page,
  popup
) {

  try {

    const handle =
      LOCAL_BOOK_FILES.get(
        pdfKey
      );

    if (!handle) {

      throw new Error(
        'Local PDF handle not found.'
      );

    }

    const file =
      await handle.getFile();

    const url =
      URL.createObjectURL(
        file
      );

    popup.location.href =
      page
        ? (
            url +
            '#page=' +
            encodeURIComponent(
              page
            )
          )
        : url;

    setTimeout(
      () => {

        URL.revokeObjectURL(
          url
        );

      },
      300000
    );

  } catch (error) {

    console.error(
      'Could not open local PDF page.',
      error
    );

    try {

      popup.close();

    } catch (closeError) {}

    toast(
      t('folderLoadError')
    );

  }

}


/* =========================================================
   OPEN PDF
   ========================================================= */

function openPdf(
  file,
  page
) {

  if (!file) {

    return;

  }

  const popup =
    window.open(
      '',
      '_blank'
    );

  if (!popup) {

    toast(
      state.lang ===
      'sl'
        ? 'Brskalnik je blokiral novo okno za PDF.'
        : 'The browser blocked the PDF window.'
    );

    return;

  }

  try {

    popup.opener =
      null;

  } catch (error) {}

  if (
    String(
      file
    ).startsWith(
      'local://'
    )
  ) {

    if (page) {

      openLocalPdfPage(
        file,
        page,
        popup
      );

    } else {

      openLocalPdf(
        file,
        popup
      );

    }

    return;

  }

  popup.location.href =
    page
      ? (
          file +
          '#page=' +
          encodeURIComponent(
            page
          )
        )
      : file;

}


/* =========================================================
   SAVE SEARCH DATABASE OPEN
   ========================================================= */

function openSearchDatabase() {

  return new Promise(
    (
      resolve,
      reject
    ) => {

      if (
        !('indexedDB' in window)
      ) {

        reject(
          new Error(
            'IndexedDB is not supported.'
          )
        );

        return;

      }

      const request =
        indexedDB.open(
          SEARCH_DB_NAME,
          SEARCH_DB_VERSION
        );

      request.onupgradeneeded =
        function () {

          const db =
            request.result;

          if (
            !db.objectStoreNames.contains(
              SEARCH_STORE_NAME
            )
          ) {

            const store =
              db.createObjectStore(
                SEARCH_STORE_NAME,
                {
                  keyPath:
                    'id'
                }
              );

            store.createIndex(
              'bookId',
              'bookId',
              {
                unique:
                  false
              }
            );

            store.createIndex(
              'pdf',
              'pdf',
              {
                unique:
                  false
              }
            );

          }

        };

      request.onsuccess =
        function () {

          resolve(
            request.result
          );

        };

      request.onerror =
        function () {

          reject(
            request.error ||
            new Error(
              'Search database error.'
            )
          );

        };

    }
  );

}


/* =========================================================
   CLEAR SEARCH DATABASE
   ========================================================= */

function clearSearchDatabase() {

  return openSearchDatabase()
    .then(
      db => {

        return new Promise(
          (
            resolve,
            reject
          ) => {

            const transaction =
              db.transaction(
                SEARCH_STORE_NAME,
                'readwrite'
              );

            const store =
              transaction.objectStore(
                SEARCH_STORE_NAME
              );

            const request =
              store.clear();

            request.onsuccess =
              () =>
                resolve();

            request.onerror =
              () =>
                reject(
                  request.error
                );

            transaction.oncomplete =
              () => {

                db.close();

              };

            transaction.onerror =
              () =>
                reject(
                  transaction.error
                );

          }
        );

      }
    );

}


/* =========================================================
   LOAD SEARCH CACHE
   ========================================================= */

function loadCachedSearchIndex() {

  return openSearchDatabase()
    .then(
      db => {

        return new Promise(
          (
            resolve,
            reject
          ) => {

            const transaction =
              db.transaction(
                SEARCH_STORE_NAME,
                'readonly'
              );

            const store =
              transaction.objectStore(
                SEARCH_STORE_NAME
              );

            const request =
              store.getAll();

            request.onsuccess =
              function () {

                const rows =
                  request.result ||
                  [];

                db.close();

                resolve(
                  rows
                );

              };

            request.onerror =
              function () {

                db.close();

                reject(
                  request.error
                );

              };

          }
        );

      }
    );

}


/* =========================================================
   SAVE SEARCH ROWS
   ========================================================= */

function saveSearchRows(
  rows
) {

  return openSearchDatabase()
    .then(
      db => {

        return new Promise(
          (
            resolve,
            reject
          ) => {

            const transaction =
              db.transaction(
                SEARCH_STORE_NAME,
                'readwrite'
              );

            const store =
              transaction.objectStore(
                SEARCH_STORE_NAME
              );

            rows.forEach(
              row => {

                store.put(
                  row
                );

              }
            );

            transaction.oncomplete =
              function () {

                db.close();

                resolve();

              };

            transaction.onerror =
              function () {

                db.close();

                reject(
                  transaction.error
                );

              };

          }
        );

      }
    );

}


/* =========================================================
   MAKE SEARCH ROW
   ========================================================= */

function makeSearchRow(
  document,
  page,
  text
) {

  const cleanText =
    String(
      text ||
      ''
    )
      .replace(
        /\s+/g,
        ' '
      )
      .trim();

  const metadata =
    getMetadata(
      document
    );

  const tags =
    Array.isArray(
      metadata.tags
    )
      ? metadata.tags.join(' ')
      : '';

  return {

    id:
      document.id +
      '|' +
      document.pdf +
      '|' +
      page,

    bookId:
      document.id,

    bookTitle:
      document.title,

    filename:
      document.filename,

    path:
      document.path,

    category:
      metadata.category,

    department:
      metadata.department,

    pdf:
      document.pdf,

    page,

    text:
      cleanText,

    normalized:
      normalizeSearchText(
        [
          document.title,
          document.filename,
          document.path,
          metadata.category,
          metadata.subcategory,
          metadata.department,
          metadata.owner,
          metadata.author,
          metadata.keywords,
          tags,
          cleanText
        ].join(' ')
      )

  };

}


/* =========================================================
   BUILD PDF SEARCH INDEX
   ========================================================= */

async function buildPdfSearchIndex() {

  const pdfjsLib =
    await getPdfJs();

  const rows =
    [];

  for (
    let index = 0;
    index <
      BOOKS.length;
    index++
  ) {

    const document =
      BOOKS[
        index
      ];

    if (
      !document ||
      !document.pdf
    ) {

      continue;

    }

    let pdfSource =
      await getPdfSource(
        document.pdf
      );

    if (
      pdfSource &&
      typeof pdfSource.getFile ===
      'function'
    ) {

      pdfSource =
        await pdfSource.getFile();

    }

    const loadingTask =
      pdfjsLib.getDocument({

        data:
          await pdfSource.arrayBuffer(),

        enableScripting:
          false

      });

    const pdf =
      await loadingTask.promise;

    document.pages =
      pdf.numPages;

    for (
      let pageNumber = 1;
      pageNumber <=
      pdf.numPages;
      pageNumber++
    ) {

      const page =
        await pdf.getPage(
          pageNumber
        );

      const content =
        await page.getTextContent();

      const text =
        content.items
          .map(
            item =>
              item.str ||
              ''
          )
          .join(' ')
          .replace(
            /\s+/g,
            ' '
          )
          .trim();

      if (text) {

        rows.push(
          makeSearchRow(
            document,
            pageNumber,
            text
          )
        );

      }

      if (
        state.screen ===
        'search'
      ) {

        state.searchIndex =
          rows.slice();

        render();

      }

    }

    try {

      await pdf.destroy();

    } catch (error) {}

  }

  save();

  return {
    rows
  };

}


/* =========================================================
   BUILD SEARCH INDEX
   ========================================================= */

async function buildSearchIndex() {

  if (
    state.searchLoading
  ) {

    return;

  }

  state.searchLoading =
    true;

  state.searchReady =
    false;

  render();

  try {

    if (
      !BOOKS.length
    ) {

      state.searchIndex =
        [];

      state.searchReady =
        true;

      return;

    }

    let cachedRows =
      [];

    try {

      cachedRows =
        await loadCachedSearchIndex();

    } catch (error) {

      console.warn(
        'Could not load search cache.',
        error
      );

    }

    const expectedIds =
      new Set(
        BOOKS.map(
          document =>
            document.id +
            '|' +
            document.pdf
        )
      );

    const cachedIds =
      new Set(
        cachedRows
          .filter(
            row =>
              row &&
              row.pdf
          )
          .map(
            row =>
              row.bookId +
              '|' +
              row.pdf
          )
      );

    const cacheComplete =
      expectedIds.size >
        0 &&
      expectedIds.size ===
        cachedIds.size &&
      [
        ...expectedIds
      ].every(
        id =>
          cachedIds.has(
            id
          )
      );

    if (
      cacheComplete
    ) {

      state.searchIndex =
        cachedRows;

    } else {

      try {

        await clearSearchDatabase();

      } catch (error) {}

      const built =
        await buildPdfSearchIndex();

      state.searchIndex =
        built.rows;

      try {

        await saveSearchRows(
          built.rows
        );

      } catch (error) {

        console.warn(
          'Could not save search rows.',
          error
        );

      }

    }

    state.searchReady =
      true;

  } catch (error) {

    console.error(
      'Search index build error.',
      error
    );

    state.searchIndex =
      [];

    state.searchReady =
      false;

    toast(
      t('searchError')
    );

  } finally {

    state.searchLoading =
      false;

    render();

  }

}


/* =========================================================
   SEARCH QUERY
   ========================================================= */

function setSearchQuery(
  value
) {

  state.query =
    value;

  save();

  render();

  requestAnimationFrame(
    () => {

      const input =
        document.querySelector(
          '.search'
        );

      if (!input) {

        return;

      }

      input.focus();

      const end =
        input.value.length;

      input.setSelectionRange(
        end,
        end
      );

    }
  );

}


/* =========================================================
   SEARCH SORT
   ========================================================= */

function setSearchSort(
  value
) {

  state.searchSort =
    value;

  save();

  render();

}


/* =========================================================
   FILTERS
   ========================================================= */

function setSearchFilter(
  field,
  value
) {

  if (
    field ===
    'status'
  ) {

    state.searchStatus =
      value;

  }

  if (
    field ===
    'category'
  ) {

    state.searchCategory =
      value;

  }

  if (
    field ===
    'department'
  ) {

    state.searchDepartment =
      value;

  }

  if (
    field ===
    'folder'
  ) {

    state.searchFolder =
      value;

  }

  if (
    field ===
    'dateFrom'
  ) {

    state.searchDateFrom =
      value;

  }

  if (
    field ===
    'dateTo'
  ) {

    state.searchDateTo =
      value;

  }

  save();

  render();

}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearFilters() {

  state.searchStatus =
    'all';

  state.searchCategory =
    'all';

  state.searchDepartment =
    'all';

  state.searchFolder =
    'all';

  state.searchDateFrom =
    '';

  state.searchDateTo =
    '';

  state.searchSort =
    'relevance';

  save();

  render();

}


/* =========================================================
   WORK DATE
   ========================================================= */

function formatWorkDate(
  value
) {

  return formatDateTime(
    value
  );

}


/* =========================================================
   MARKDOWN
   ========================================================= */

function markdownToHtml(
  text
) {

  let html =
    escapeHtml(
      text
    );

  html =
    html.replace(
      /^### (.*)$/gm,
      '<h3>$1</h3>'
    );

  html =
    html.replace(
      /^## (.*)$/gm,
      '<h2>$1</h2>'
    );

  html =
    html.replace(
      /^# (.*)$/gm,
      '<h1>$1</h1>'
    );

  html =
    html.replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>'
    );

  const blocks =
    html
      .split(
        /\n\s*\n/
      )
      .map(
        block =>
          block.trim()
      )
      .filter(
        Boolean
      );

  return blocks
    .map(
      block => {

        if (
          block.startsWith(
            '<h1>'
          ) ||
          block.startsWith(
            '<h2>'
          ) ||
          block.startsWith(
            '<h3>'
          )
        ) {

          return block;

        }

        return (
          '<p>' +
          block.replace(
            /\n/g,
            '<br>'
          ) +
          '</p>'
        );

      }
    )
    .join(
      '\n'
    );

}


/* =========================================================
   SIDEBAR NAVIGATION
   ========================================================= */

function sidebarNav() {

  const items = [

    {
      key:
        'dashboard',

      icon:
        '▦',

      label:
        t('dashboard')
    },

    {
      key:
        'documents',

      icon:
        '▤',

      label:
        t('documents')
    },

    {
      key:
        'search',

      icon:
        '⌕',

      label:
        t('search')
    },

    {
      key:
        'categories',

      icon:
        '▦',

      label:
        t('categories')
    },

    {
      key:
        'recent',

      icon:
        '◷',

      label:
        t('recent')
    },

    {
      key:
        'favorites',

      icon:
        '★',

      label:
        t('favorites'),

      count:
        state.favorites.length
    },

    {
      key:
        'review',

      icon:
        '✓',

      label:
        t('review'),

      count:
        getReviewDocuments().length
    },

    {
      key:
        'archive',

      icon:
        '▱',

      label:
        t('archive')
    }

  ];

  const aiItems = [

    {
      key:
        'ai',

      icon:
        '✦',

      label:
        t('ai')
    },

    {
      key:
        'saved',

      icon:
        '◈',

      label:
        t('saved'),

      count:
        state.works.length
    }

  ];

  return `

    <aside
      class="dms-sidebar">

      <div
        class="dms-brand">

        <div
          class="dms-brand-mark">

          <div
            class="dms-brand-icon">

            DMS

          </div>

          <div>

            <div
              class="dms-brand-title">

              ${escapeHtml(
                state.lang ===
                'sl'
                  ? 'Dokumentacija'
                  : 'Documentation'
              )}

            </div>

            <div
              class="dms-brand-subtitle">

              ${escapeHtml(
                t('appTitle')
              )}

            </div>

          </div>

        </div>

      </div>

      <nav
        class="dms-nav">

        <div
          class="dms-nav-section">

          ${t('overview')}

        </div>

        ${items
          .map(
            item =>
              sidebarNavItem(
                item
              )
          )
          .join('')}

        <div
          class="dms-nav-section">

          ${t('ai')}

        </div>

        ${aiItems
          .map(
            item =>
              sidebarNavItem(
                item
              )
          )
          .join('')}

        <div
          class="dms-nav-section">

          ${t('settings')}

        </div>

        <button
          type="button"
          class="${
            state.screen ===
            'settings'
              ? 'active'
              : ''
          }"
          onclick="
            go('settings')
          ">

          <span
            class="dms-nav-icon">

            ⚙

          </span>

          <span
            class="dms-nav-label">

            ${t('settings')}

          </span>

        </button>

      </nav>

      <div
        class="dms-sidebar-footer">

        <div
          class="dms-user-box">

          <div
            class="dms-user-avatar">

            D

          </div>

          <div
            class="dms-user-name">

            <strong>

              DMS

            </strong>

            <span>

              ${t('localOnly')}

            </span>

          </div>

        </div>

      </div>

    </aside>

  `;

}


function sidebarNavItem(
  item
) {

  return `

    <button
      type="button"
      class="${
        state.screen ===
        item.key
          ? 'active'
          : ''
      }"
      onclick="
        go('${item.key}')
      ">

      <span
        class="dms-nav-icon">

        ${item.icon}

      </span>

      <span
        class="dms-nav-label">

        ${escapeHtml(
          item.label
        )}

      </span>

      ${
        item.count !==
        undefined
          ? `

            <span
              class="dms-nav-count">

              ${Number(
                item.count
              )}

            </span>

          `
          : ''
      }

    </button>

  `;

}


/* =========================================================
   LANGUAGE SELECTOR
   ========================================================= */

function languageSelector() {

  return `

    <div
      class="language-selector">

      <button
        type="button"
        class="chip ${
          state.lang ===
          'sl'
            ? 'on'
            : ''
        }"
        onclick="
          setLanguage('sl')
        ">

        🇸🇮 SL

      </button>

      <button
        type="button"
        class="chip ${
          state.lang ===
          'en'
            ? 'on'
            : ''
        }"
        onclick="
          setLanguage('en')
        ">

        🇬🇧 EN

      </button>

    </div>

  `;

}


/* =========================================================
   TOPBAR
   ========================================================= */

function topbar() {

  const titleMap = {

    dashboard:
      t('dashboard'),

    documents:
      t('documents'),

    search:
      t('search'),

    categories:
      t('categories'),

    recent:
      t('recent'),

    favorites:
      t('favorites'),

    review:
      t('review'),

    archive:
      t('archive'),

    ai:
      t('ai'),

    saved:
      t('saved'),

    settings:
      t('settings'),

    document:
      t('documentDetails'),

    result:
      t('ai')

  };

  const pageTitle =
    titleMap[
      state.screen
    ] ||
    t('documents');

  return `

    <header
      class="dms-topbar">

      <div
        class="dms-topbar-left">

        <div
          class="dms-page-context">

          <div
            class="eyebrow">

            ${t('appTitle')}

          </div>

          <h1
            class="dms-page-title">

            ${escapeHtml(
              pageTitle
            )}

          </h1>

        </div>

      </div>

      <div
        class="dms-topbar-search">

        <span
          class="search-icon">

          ⌕

        </span>

        <input
          type="search"
          value="${escapeAttribute(
            state.query
          )}"
          oninput="
            setSearchQuery(
              this.value
            )
          "
          onkeydown="
            if(event.key==='Enter'){
              go('search');
            }
          "
          placeholder="${t(
            'searchDocuments'
          )}"
        >

      </div>

      <div
        class="dms-topbar-actions">

        <button
          type="button"
          class="btn btn-icon btn-secondary"
          title="${t(
            'refresh'
          )}"
          onclick="
            refreshBooks()
          ">

          ↻

        </button>

        <button
          type="button"
          class="btn btn-icon btn-secondary"
          title="${t(
            'language'
          )}"
          onclick="
            setLanguage(
              state.lang === 'sl'
                ? 'en'
                : 'sl'
            )
          ">

          ${state.lang ===
          'sl'
            ? 'SL'
            : 'EN'}

        </button>

      </div>

    </header>

  `;

}


/* =========================================================
   DMS LAYOUT
   ========================================================= */

function dmsLayout(
  body
) {

  return `

    <div
      class="dms-layout">

      ${sidebarNav()}

      <div
        class="dms-main">

        ${topbar()}

        <main
          class="content">

          ${body}

        </main>

      </div>

      ${
        state.toast
          ? `

            <div
              class="toast">

              ${escapeHtml(
                state.toast
              )}

            </div>

          `
          : ''
      }

    </div>

  `;

}


/* =========================================================
   PAGE HEADER
   ========================================================= */

function pageHeader(
  eyebrow,
  title,
  description = '',
  actions = ''
) {

  return `

    <div
      class="page-header">

      <div
        class="page-header-copy">

        ${
          eyebrow
            ? `

              <div
                class="eyebrow">

                ${escapeHtml(
                  eyebrow
                )}

              </div>

            `
            : ''
        }

        <h1>

          ${escapeHtml(
            title
          )}

        </h1>

        ${
          description
            ? `

              <p
                class="page-description">

                ${escapeHtml(
                  description
                )}

              </p>

            `
            : ''
        }

      </div>

      ${
        actions
          ? `

            <div
              class="page-header-actions">

              ${actions}

            </div>

          `
          : ''
      }

    </div>

  `;

}


/* =========================================================
   DOCUMENT ICON
   ========================================================= */

function documentIcon() {

  return `

    <span
      class="document-file-icon">

      PDF

    </span>

  `;

}


/* =========================================================
   DOCUMENT ROW
   ========================================================= */

function documentRow(
  document,
  options = {}
) {

  if (!document) {
    return '';
  }

  const metadata =
    getMetadata(
      document
    );

  const isFavorite =
    state.favorites.includes(
      document.id
    );

  const selected =
    state.selectedDocumentIds.includes(
      document.id
    );

  const compact =
    options.compact ||
    false;

  return `

    <tr
      onclick="
        openDocumentDetails(
          '${escapeAttribute(
            document.id
          )}'
        )
      ">

      <td
        onclick="
          event.stopPropagation()
        ">

        <input
          type="checkbox"
          class="document-checkbox"
          ${
            selected
              ? 'checked'
              : ''
          }
          onchange="
            toggleDocumentSelection(
              '${escapeAttribute(
                document.id
              )}'
            )
          "
        >

      </td>

      <td>

        <div
          class="document-name">

          ${documentIcon()}

          <div
            class="document-name-copy">

            <strong>

              ${escapeHtml(
                documentTitle(
                  document
                )
              )}

            </strong>

            <span>

              ${escapeHtml(
                document.filename ||
                ''
              )}

            </span>

          </div>

        </div>

      </td>

      ${
        compact
          ? ''
          : `

            <td>

              ${escapeHtml(
                metadata.category ||
                '—'
              )}

            </td>

            <td>

              ${escapeHtml(
                metadata.department ||
                '—'
              )}

            </td>

            <td>

              ${renderStatus(
                document
              )}

            </td>

            <td>

              ${formatDate(
                document.lastModified
              )}

            </td>

            <td>

              ${formatFileSize(
                document.fileSize
              )}

            </td>

          `
      }

      <td>

        <div
          class="document-actions"
          onclick="
            event.stopPropagation()
          ">

          <button
            type="button"
            class="favorite-mark ${
              isFavorite
                ? 'active'
                : ''
            }"
            title="${
              isFavorite
                ? t(
                    'removeFavorite'
                  )
                : t(
                    'markFavorite'
                  )
            }"
            onclick="
              toggleFavorite(
                '${escapeAttribute(
                  document.id
                )}'
              )
            ">

            ${
              isFavorite
                ? '★'
                : '☆'
            }

          </button>

          <button
            type="button"
            class="btn btn-sm btn-ghost"
            onclick="
              openDocument(
                '${escapeAttribute(
                  document.id
                )}'
              )
            ">

            ${t('open')}

          </button>

        </div>

      </td>

    </tr>

  `;

}


/* =========================================================
   DOCUMENT TABLE
   ========================================================= */

function documentTable(
  documents,
  options = {}
) {

  if (
    !Array.isArray(
      documents
    ) ||
    !documents.length
  ) {

    return `

      <div
        class="document-table-wrap">

        <div
          class="document-empty">

          <strong>

            ${t('noDocuments')}

          </strong>

          <span>

            ${t('localDocuments')}

          </span>

        </div>

      </div>

    `;

  }

  const compact =
    options.compact ||
    false;

  return `

    <div
      class="document-table-wrap">

      <table
        class="document-table">

        <thead>

          <tr>

            <th>

              &nbsp;

            </th>

            <th>

              ${t('title')}

            </th>

            ${
              compact
                ? ''
                : `

                  <th>

                    ${t(
                      'category'
                    )}

                  </th>

                  <th>

                    ${t(
                      'department'
                    )}

                  </th>

                  <th>

                    ${t(
                      'status'
                    )}

                  </th>

                  <th>

                    ${t(
                      'lastModified'
                    )}

                  </th>

                  <th>

                    ${t(
                      'fileSize'
                    )}

                  </th>

                `
            }

            <th>

              ${t('actions')}

            </th>

          </tr>

        </thead>

        <tbody>

          ${documents
            .map(
              document =>
                documentRow(
                  document,
                  options
                )
            )
            .join('')}

        </tbody>

      </table>

    </div>

  `;

}


/* =========================================================
   DOCUMENT FILTERING
   ========================================================= */

function filterDocuments(
  documents,
  options = {}
) {

  const list =
    Array.isArray(
      documents
    )
      ? documents
      : [];

  const query =
    normalizeSearchText(
      state.query.trim()
    );

  const includeArchived =
    options.includeArchived ===
    true;

  let filtered =
    list.filter(
      document => {

        if (
          !document
        ) {

          return false;

        }

        const status =
          getDocumentStatus(
            document
          );

        if (
          !includeArchived &&
          status ===
            'archived'
        ) {

          return false;

        }

        if (
          query &&
          !matchesDocumentQuery(
            document,
            query
          )
        ) {

          return false;

        }

        return true;

      }
    );

  if (
    state.activeCategory
  ) {

    filtered =
      filtered.filter(
        document =>
          getMetadata(
            document
          ).category ===
          state.activeCategory
      );

  }

  if (
    state.activeDepartment
  ) {

    filtered =
      filtered.filter(
        document =>
          getMetadata(
            document
          ).department ===
          state.activeDepartment
      );

  }

  if (
    state.activeStatus !==
    'all'
  ) {

    filtered =
      filtered.filter(
        document =>
          getDocumentStatus(
            document
          ) ===
          state.activeStatus
      );

  }

  return filtered;

}


/* =========================================================
   REVIEW DOCUMENTS
   ========================================================= */

function getReviewDocuments() {

  return BOOKS.filter(
    document => {

      const metadata =
        getMetadata(
          document
        );

      const status =
        getDocumentStatus(
          document
        );

      if (
        status ===
        'review'
      ) {

        return true;

      }

      if (
        metadata.reviewDate
      ) {

        const reviewDate =
          new Date(
            metadata.reviewDate
          );

        if (
          !Number.isNaN(
            reviewDate.getTime()
          )
        ) {

          return reviewDate <=
            new Date();

        }

      }

      return false;

    }
  );

}


/* =========================================================
   ARCHIVED DOCUMENTS
   ========================================================= */

function getArchivedDocuments() {

  return BOOKS.filter(
    document =>
      getDocumentStatus(
        document
      ) ===
      'archived'
  );

}


/* =========================================================
   ACTIVE DOCUMENTS
   ========================================================= */

function getActiveDocuments() {

  return BOOKS.filter(
    document =>
      getDocumentStatus(
        document
      ) !==
      'archived'
  );

}


/* =========================================================
   EXPIRED DOCUMENTS
   ========================================================= */

function getExpiredDocuments() {

  return BOOKS.filter(
    document =>
      getDocumentStatus(
        document
      ) ===
      'expired'
  );

}


/* =========================================================
   FAVORITE DOCUMENTS
   ========================================================= */

function getFavoriteDocuments() {

  const favoriteSet =
    new Set(
      state.favorites
    );

  return BOOKS.filter(
    document =>
      favoriteSet.has(
        document.id
      )
  )
    .filter(
      document =>
        getDocumentStatus(
          document
        ) !==
        'archived'
    );

}


/* =========================================================
   RECENT DOCUMENTS
   ========================================================= */

function getRecentDocuments() {

  const map =
    new Map(
      BOOKS.map(
        document => [
          document.id,
          document
        ]
      )
    );

  return state.recent
    .map(
      id =>
        map.get(
          id
        )
    )
    .filter(
      Boolean
    );

}


/* =========================================================
   CATEGORY DOCUMENTS
   ========================================================= */

function getCategoryDocuments(
  category
) {

  return BOOKS.filter(
    document =>
      getMetadata(
        document
      ).category ===
      category
  );

}


/* =========================================================
   DASHBOARD STATISTICS
   ========================================================= */

function getDashboardStats() {

  const all =
    BOOKS;

  const active =
    getActiveDocuments();

  const archived =
    getArchivedDocuments();

  const review =
    getReviewDocuments();

  const expired =
    getExpiredDocuments();

  const categories =
    new Set(
      all.map(
        document =>
          getMetadata(
            document
          ).category ||
          ''
      )
      .filter(
        Boolean
      )
    );

  const departments =
    new Set(
      all.map(
        document =>
          getMetadata(
            document
          ).department ||
          ''
      )
      .filter(
        Boolean
      )
    );

  const totalPages =
    all.reduce(
      (
        total,
        document
      ) =>
        total +
        Number(
          document.pages ||
          0
        ),
      0
    );

  const totalSize =
    all.reduce(
      (
        total,
        document
      ) =>
        total +
        Number(
          document.fileSize ||
          0
        ),
      0
    );

  return {

    total:
      all.length,

    active:
      active.length,

    archived:
      archived.length,

    review:
      review.length,

    expired:
      expired.length,

    categories:
      categories.size,

    departments:
      departments.size,

    pages:
      totalPages,

    size:
      totalSize

  };

}


/* =========================================================
   STAT CARD
   ========================================================= */

function statCard(
  label,
  value,
  icon,
  sub = ''
) {

  return `

    <div
      class="stat-card">

      <div
        class="stat-card-head">

        <span
          class="stat-label">

          ${escapeHtml(
            label
          )}

        </span>

        <span
          class="stat-icon">

          ${icon}

        </span>

      </div>

      <div
        class="stat-value">

        ${escapeHtml(
          String(
            value
          )
        )}

      </div>

      ${
        sub
          ? `

            <div
              class="stat-sub">

              ${escapeHtml(
                sub
              )}

            </div>

          `
          : ''
      }

    </div>

  `;

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function dashboard() {

  const stats =
    getDashboardStats();

  const recent =
    getRecentDocuments()
      .slice(
        0,
        7
      );

  const review =
    getReviewDocuments()
      .slice(
        0,
        7
      );

  const categories =
    getCategories()
      .slice(
        0,
        8
      );

  const actions = `

    <button
      type="button"
      class="btn btn-primary"
      onclick="
        go('documents')
      ">

      ${t('documents')}

    </button>

    <button
      type="button"
      class="btn btn-secondary"
      onclick="
        chooseBooksFolder()
      ">

      ${t('changeFolder')}

    </button>

  `;

  return dmsLayout(`

    ${pageHeader(
      t('overview'),
      t('dashboard'),
      state.localFolderName
        ? (
            state.lang ===
            'sl'
              ? (
                  'Repozitorij: ' +
                  state.localFolderName
                )
              : (
                  'Repository: ' +
                  state.localFolderName
                )
          )
        : t(
            'folderNotSelected'
          ),
      actions
    )}

    <div
      class="dashboard-grid">

      ${statCard(
        t('totalDocuments'),
        stats.total,
        '▤'
      )}

      ${statCard(
        t('activeDocuments'),
        stats.active,
        '●'
      )}

      ${statCard(
        t('reviewCount'),
        stats.review,
        '✓'
      )}

      ${statCard(
        t('archivedDocuments'),
        stats.archived,
        '▱'
      )}

    </div>

    <div
      class="section dashboard-columns">

      <section
        class="dashboard-section">

        <div
          class="card">

          <div
            class="card-header">

            <div
              class="card-header-title">

              <strong>

                ${t(
                  'recentDocuments'
                )}

              </strong>

              <span>

                ${recent.length}

              </span>

            </div>

            <button
              type="button"
              class="btn btn-sm btn-ghost"
              onclick="
                go('recent')
              ">

              ${t('recent')}

            </button>

          </div>

          ${
            recent.length
              ? `

                ${documentTable(
                  recent,
                  {
                    compact:
                      true
                  }
                )}

              `
              : `

                <div
                  class="document-empty">

                  <strong>

                    ${t(
                      'noRecent'
                    )}

                  </strong>

                </div>

              `
          }

        </div>

      </section>


      <section
        class="dashboard-section">

        <div
          class="card">

          <div
            class="card-header">

            <div
              class="card-header-title">

              <strong>

                ${t(
                  'reviewQueue'
                )}

              </strong>

              <span>

                ${review.length}

              </span>

            </div>

            <button
              type="button"
              class="btn btn-sm btn-ghost"
              onclick="
                go('review')
              ">

              ${t('review')}

            </button>

          </div>

          ${
            review.length
              ? `

                <div
                  class="review-list"
                  style="
                    padding:0 16px
                  ">

                  ${review
                    .map(
                      document => {

                        const metadata =
                          getMetadata(
                            document
                          );

                        return `

                          <div
                            class="review-item">

                            ${documentIcon()}

                            <div
                              class="review-item-main">

                              <div
                                class="review-item-title">

                                ${escapeHtml(
                                  documentTitle(
                                    document
                                  )
                                )}

                              </div>

                              <div
                                class="review-item-meta">

                                ${
                                  metadata.reviewDate
                                    ? (
                                        formatDate(
                                          metadata.reviewDate
                                        )
                                      )
                                    : t(
                                        'needsReview'
                                      )
                                }

                              </div>

                            </div>

                            ${renderStatus(
                              document
                            )}

                          </div>

                        `;

                      }
                    )
                    .join('')}

                </div>

              `
              : `

                <div
                  class="document-empty">

                  <strong>

                    ${t(
                      'noReview'
                    )}

                  </strong>

                </div>

              `
          }

        </div>

      </section>

    </div>


    <div
      class="section dashboard-columns equal">

      <section
        class="dashboard-section">

        <div
          class="card">

          <div
            class="card-header">

            <div
              class="card-header-title">

              <strong>

                ${t(
                  'categoryOverview'
                )}

              </strong>

            </div>

            <button
              type="button"
              class="btn btn-sm btn-ghost"
              onclick="
                go('categories')
              ">

              ${t(
                'categories'
              )}

            </button>

          </div>

          <div
            class="card-body">

            ${
              categories.length
                ? `

                  <div
                    class="category-grid"
                    style="
                      grid-template-columns:1fr 1fr
                    ">

                    ${categories
                      .map(
                        category => {

                          const count =
                            getCategoryDocuments(
                              category
                            ).length;

                          return `

                            <button
                              type="button"
                              class="category-card"
                              style="
                                text-align:left
                              "
                              onclick="
                                openCategory(
                                  '${escapeAttribute(
                                    category
                                  )}'
                                )
                              ">

                              <div
                                class="category-icon">

                                ▦

                              </div>

                              <div
                                class="category-name">

                                ${escapeHtml(
                                  category
                                )}

                              </div>

                              <div
                                class="category-meta">

                                ${count}

                                ${t(
                                  'documentsInCategory'
                                )}

                              </div>

                            </button>

                          `;

                        }
                      )
                      .join('')}

                  </div>

                `
                : `

                  <div
                    class="muted">

                    ${t(
                      'noCategories'
                    )}

                  </div>

                `
            }

          </div>

        </div>

      </section>


      <section
        class="dashboard-section">

        <div
          class="card">

          <div
            class="card-header">

            <div
              class="card-header-title">

              <strong>

                ${t(
                  'recentActivity'
                )}

              </strong>

            </div>

          </div>

          <div
            class="card-body">

            ${renderActivityList(
              state.activity.slice(
                0,
                8
              )
            )}

          </div>

        </div>

      </section>

    </div>

  `);

}


/* =========================================================
   ACTIVITY LIST
   ========================================================= */

function renderActivityList(
  items
) {

  if (
    !Array.isArray(
      items
    ) ||
    !items.length
  ) {

    return `

      <div
        class="muted">

        ${t('noRecent')}

      </div>

    `;

  }

  return `

    <div
      class="activity-list">

      ${items
        .map(
          item => `

            <div
              class="activity-item">

              <div
                class="activity-dot">
              </div>

              <div
                class="activity-copy">

                <strong>

                  ${escapeHtml(
                    item.label
                  )}

                </strong>

                <span>

                  ${escapeHtml(
                    item.documentTitle ||
                    ''
                  )}

                </span>

              </div>

              <div
                class="activity-time">

                ${formatDateTime(
                  item.createdAt
                )}

              </div>

            </div>

          `
        )
        .join('')}

    </div>

  `;

}


/* =========================================================
   DOCUMENTS TOOLBAR
   ========================================================= */

function documentsToolbar(
  documents
) {

  const allIds =
    documents.map(
      document =>
        document.id
    );

  const allSelected =
    allIds.length >
      0 &&
    allIds.every(
      id =>
        state.selectedDocumentIds.includes(
          id
        )
    );

  return `

    <div
      class="document-toolbar">

      <div
        class="document-toolbar-left">

        <button
          type="button"
          class="btn btn-secondary btn-sm"
          onclick="
            toggleAllDocuments()
          ">

          ${
            allSelected
              ? t('unselectAll')
              : t('selectAll')
          }

        </button>

        <span
          class="document-count">

          ${documents.length}

          ${t('results')}

        </span>

        ${
          state.selectedDocumentIds.length
            ? `

              <span
                class="status status-info">

                ${state.selectedDocumentIds.length}

                ${t(
                  'selectedDocuments'
                )}

              </span>

            `
            : ''
        }

      </div>

      <div
        class="document-toolbar-right">

        <button
          type="button"
          class="btn btn-primary btn-sm"
          onclick="
            go('ai')
          ">

          ✦

          ${t('ai')}

        </button>

        <button
          type="button"
          class="btn btn-secondary btn-sm"
          onclick="
            refreshBooks()
          ">

          ↻

          ${t('refresh')}

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   DOCUMENTS SEARCH PANEL
   ========================================================= */

function documentsSearchPanel() {

  const categories =
    getCategories();

  const departments =
    getDepartments();

  const folders =
    getFolders();

  return `

    <div
      class="search-panel">

      <div
        class="search-row">

        <input
          class="search"
          value="${escapeAttribute(
            state.query
          )}"
          oninput="
            setSearchQuery(
              this.value
            )
          "
          placeholder="${t(
            'searchFullText'
          )}"
        >

        <button
          type="button"
          class="btn btn-primary"
          onclick="
            go('search')
          ">

          ⌕

          ${t('search')}

        </button>

      </div>

      <div
        class="advanced-filters">

        <div
          class="filter-group">

          <label
            class="filter-label">

            ${t('status')}

          </label>

          <select
            class="select-input"
            onchange="
              setSearchFilter(
                'status',
                this.value
              )
            ">

            ${[
              [
                'all',
                t(
                  'allStatuses'
                )
              ],
              [
                'active',
                t(
                  'active'
                )
              ],
              [
                'draft',
                t(
                  'draft'
                )
              ],
              [
                'review',
                t(
                  'inReview'
                )
              ],
              [
                'approved',
                t(
                  'approved'
                )
              ],
              [
                'valid',
                t(
                  'valid'
                )
              ],
              [
                'expired',
                t(
                  'expired'
                )
              ],
              [
                'archived',
                t(
                  'archived'
                )
              ]
            ]
              .map(
                (
                  [
                    value,
                    label
                  ]
                ) => `

                  <option
                    value="${escapeAttribute(
                      value
                    )}"
                    ${
                      state.searchStatus ===
                      value
                        ? 'selected'
                        : ''
                    }>

                    ${escapeHtml(
                      label
                    )}

                  </option>

                `
              )
              .join('')}

          </select>

        </div>


        <div
          class="filter-group">

          <label
            class="filter-label">

            ${t(
              'category'
            )}

          </label>

          <select
            class="select-input"
            onchange="
              setSearchFilter(
                'category',
                this.value
              )
            ">

            <option
              value="all">

              ${t(
                'allCategories'
              )}

            </option>

            ${categories
              .map(
                category => `

                  <option
                    value="${escapeAttribute(
                      category
                    )}"
                    ${
                      state.searchCategory ===
                      category
                        ? 'selected'
                        : ''
                    }>

                    ${escapeHtml(
                      category
                    )}

                  </option>

                `
              )
              .join('')}

          </select>

        </div>


        <div
          class="filter-group">

          <label
            class="filter-label">

            ${t(
              'department'
            )}

          </label>

          <select
            class="select-input"
            onchange="
              setSearchFilter(
                'department',
                this.value
              )
            ">

            <option
              value="all">

              ${t(
                'allDepartments'
              )}

            </option>

            ${departments
              .map(
                department => `

                  <option
                    value="${escapeAttribute(
                      department
                    )}"
                    ${
                      state.searchDepartment ===
                      department
                        ? 'selected'
                        : ''
                    }>

                    ${escapeHtml(
                      department
                    )}

                  </option>

                `
              )
              .join('')}

          </select>

        </div>


        <div
          class="filter-group">

          <label
            class="filter-label">

            ${t('folder')}

          </label>

          <select
            class="select-input"
            onchange="
              setSearchFilter(
                'folder',
                this.value
              )
            ">

            <option
              value="all">

              ${t(
                'allFolders'
              )}

            </option>

            ${folders
              .map(
                folder => `

                  <option
                    value="${escapeAttribute(
                      folder
                    )}"
                    ${
                      state.searchFolder ===
                      folder
                        ? 'selected'
                        : ''
                    }>

                    ${escapeHtml(
                      folder
                    )}

                  </option>

                `
              )
              .join('')}

          </select>

        </div>


        <div
          class="filter-group">

          <label
            class="filter-label">

            ${t(
              'dateFrom'
            )}

          </label>

          <input
            type="date"
            class="input"
            value="${escapeAttribute(
              state.searchDateFrom
            )}"
            onchange="
              setSearchFilter(
                'dateFrom',
                this.value
              )
            "
          >

        </div>


        <div
          class="filter-group">

          <label
            class="filter-label">

            ${t(
              'dateTo'
            )}

          </label>

          <input
            type="date"
            class="input"
            value="${escapeAttribute(
              state.searchDateTo
            )}"
            onchange="
              setSearchFilter(
                'dateTo',
                this.value
              )
            "
          >

        </div>


        <div
          class="filter-group">

          <label
            class="filter-label">

            ${t(
              'sortBy'
            )}

          </label>

          <select
            class="select-input"
            onchange="
              setSearchSort(
                this.value
              )
            ">

            ${[
              [
                'relevance',
                t(
                  'relevance'
                )
              ],
              [
                'nameAsc',
                t(
                  'nameAsc'
                )
              ],
              [
                'nameDesc',
                t(
                  'nameDesc'
                )
              ],
              [
                'newest',
                t(
                  'newest'
                )
              ],
              [
                'oldest',
                t(
                  'oldest'
                )
              ],
              [
                'largest',
                t(
                  'largest'
                )
              ],
              [
                'smallest',
                t(
                  'smallest'
                )
              ]
            ]
              .map(
                (
                  [
                    value,
                    label
                  ]
                ) => `

                  <option
                    value="${value}"
                    ${
                      state.searchSort ===
                      value
                        ? 'selected'
                        : ''
                    }>

                    ${escapeHtml(
                      label
                    )}

                  </option>

                `
              )
              .join('')}

          </select>

        </div>

      </div>

      <div
        class="filter-actions">

        <button
          type="button"
          class="btn btn-secondary btn-sm"
          onclick="
            clearFilters()
          ">

          ${t(
            'clearFilters'
          )}

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   DOCUMENTS SCREEN
   ========================================================= */

function documents() {

  if (
    !BOOKS.length
  ) {

    return dmsLayout(`

      ${pageHeader(
        t('documents'),
        t('documents'),
        t('folderNotSelected'),
        `
          <button
            type="button"
            class="btn btn-primary"
            onclick="
              chooseBooksFolder()
            ">

            📁

            ${t(
              'chooseFolder'
            )}

          </button>
        `
      )}

      <div
        class="card">

        <div
          class="document-empty">

          <strong>

            ${t(
              'noDocuments'
            )}

          </strong>

          <span>

            ${t(
              'chooseFolder'
            )}

          </span>

        </div>

      </div>

    `);

  }

  const documentsList =
    sortDocuments(
      filterDocuments(
        BOOKS,
        {
          includeArchived:
            false
        }
      ),
      state.searchSort
    );

  return dmsLayout(`

    ${pageHeader(
      t('documents'),
      t('documents'),
      state.localFolderName
        ? (
            state.lang ===
            'sl'
              ? (
                  'Repozitorij vsebuje ' +
                  BOOKS.length +
                  ' dokumentov.'
                )
              : (
                  'Repository contains ' +
                  BOOKS.length +
                  ' documents.'
                )
          )
        : '',
      `
        <button
          type="button"
          class="btn btn-primary"
          onclick="
            chooseBooksFolder()
          ">

          📁

          ${t(
            'changeFolder'
          )}

        </button>
      `
    )}

    ${documentsSearchPanel()}

    <div
      class="section">

      ${documentsToolbar(
        documentsList
      )}

      ${documentTable(
        documentsList
      )}

    </div>

  `);

}

/* =========================================================
   SEARCH INDEX RESULTS
   ========================================================= */

function getSearchResults() {

  const query =
    normalizeSearchText(
      state.query.trim()
    );

  let rows =
    Array.isArray(
      state.searchIndex
    )
      ? state.searchIndex
      : [];

  if (
    !query
  ) {

    return [];

  }

  rows =
    rows.filter(
      row => {

        if (
          !row ||
          !row.bookId
        ) {

          return false;

        }

        const document =
          getDocumentById(
            row.bookId
          );

        if (!document) {
          return false;
        }

        if (
          getDocumentStatus(
            document
          ) ===
          'archived' &&
          state.searchStatus !==
            'archived'
        ) {

          return false;

        }

        return (
          row.normalized ||
          normalizeSearchText(
            [
              row.bookTitle,
              row.filename,
              row.path,
              row.category,
              row.department,
              row.text
            ].join(' ')
          )
        ).includes(
          query
        );

      }
    );

  return rows;

}


/* =========================================================
   SEARCH RESULT SCORING
   ========================================================= */

function scoreSearchResult(
  row
) {

  const query =
    normalizeSearchText(
      state.query.trim()
    );

  if (!query) {

    return 0;

  }

  const document =
    getDocumentById(
      row.bookId
    );

  if (!document) {

    return 0;

  }

  const metadata =
    getMetadata(
      document
    );

  const title =
    normalizeSearchText(
      document.title
    );

  const filename =
    normalizeSearchText(
      document.filename
    );

  const category =
    normalizeSearchText(
      metadata.category
    );

  const department =
    normalizeSearchText(
      metadata.department
    );

  const folder =
    normalizeSearchText(
      document.path
    );

  const text =
    normalizeSearchText(
      row.text
    );

  let score =
    0;

  if (
    title ===
    query
  ) {

    score +=
      100;

  } else if (
    title.includes(
      query
    )
  ) {

    score +=
      50;

  }

  if (
    filename.includes(
      query
    )
  ) {

    score +=
      35;

  }

  if (
    category.includes(
      query
    )
  ) {

    score +=
      25;

  }

  if (
    department.includes(
      query
    )
  ) {

    score +=
      20;

  }

  if (
    folder.includes(
      query
    )
  ) {

    score +=
      10;

  }

  if (
    text.includes(
      query
    )
  ) {

    score +=
      15;

  }

  const words =
    query
      .split(/\s+/)
      .filter(
        Boolean
      );

  words.forEach(
    word => {

      if (
        title.includes(
          word
        )
      ) {

        score +=
          10;

      }

      if (
        text.includes(
          word
        )
      ) {

        score +=
          2;

      }

    }
  );

  return score;

}


/* =========================================================
   ADVANCED SEARCH MATCH
   ========================================================= */

function matchesAdvancedSearch(
  document
) {

  if (!document) {

    return false;

  }

  const status =
    getDocumentStatus(
      document
    );

  const metadata =
    getMetadata(
      document
    );

  if (
    state.searchStatus !==
      'all' &&
    status !==
      state.searchStatus
  ) {

    return false;

  }

  if (
    state.searchCategory !==
      'all' &&
    metadata.category !==
      state.searchCategory
  ) {

    return false;

  }

  if (
    state.searchDepartment !==
      'all' &&
    metadata.department !==
      state.searchDepartment
  ) {

    return false;

  }

  if (
    state.searchFolder !==
      'all'
  ) {

    const folder =
      getPathParts(
        document.path
      )
        .slice(
          0,
          -1
        )
        .join('/');

    if (
      folder !==
      state.searchFolder
    ) {

      return false;

    }

  }

  if (
    state.searchDateFrom
  ) {

    const from =
      new Date(
        state.searchDateFrom
      );

    const date =
      new Date(
        document.lastModified ||
        0
      );

    if (
      date <
      from
    ) {

      return false;

    }

  }

  if (
    state.searchDateTo
  ) {

    const to =
      new Date(
        state.searchDateTo
      );

    to.setHours(
      23,
      59,
      59,
      999
    );

    const date =
      new Date(
        document.lastModified ||
        0
      );

    if (
      date >
      to
    ) {

      return false;

    }

  }

  return true;

}


/* =========================================================
   FULL DOCUMENT SEARCH
   ========================================================= */

function getVisibleSearchDocuments() {

  const query =
    state.query.trim();

  let documents =
    BOOKS.filter(
      document =>
        matchesAdvancedSearch(
          document
        )
    );

  if (!query) {

    return sortDocuments(
      documents,
      state.searchSort
    );

  }

  const scored =
    documents
      .map(
        document => {

          let score =
            0;

          const metadata =
            getMetadata(
              document
            );

          const text =
            normalizeSearchText(
              [
                document.title,
                document.filename,
                document.path,
                metadata.category,
                metadata.subcategory,
                metadata.department,
                metadata.owner,
                metadata.author,
                metadata.keywords,
                Array.isArray(
                  metadata.tags
                )
                  ? metadata.tags.join(
                      ' '
                    )
                  : ''
              ].join(' ')
            );

          const normalizedQuery =
            normalizeSearchText(
              query
            );

          if (
            text.includes(
              normalizedQuery
            )
          ) {

            score +=
              20;

          }

          if (
            normalizeSearchText(
              document.title
            ).includes(
              normalizedQuery
            )
          ) {

            score +=
              50;

          }

          if (
            normalizeSearchText(
              document.filename
            ).includes(
              normalizedQuery
            )
          ) {

            score +=
              35;

          }

          if (
            normalizeSearchText(
              metadata.category
            ).includes(
              normalizedQuery
            )
          ) {

            score +=
              25;

          }

          if (
            normalizeSearchText(
              metadata.department
            ).includes(
              normalizedQuery
            )
          ) {

            score +=
              20;

          }

          const matchingRows =
            state.searchIndex.filter(
              row =>
                row.bookId ===
                  document.id &&
                (
                  row.normalized ||
                  normalizeSearchText(
                    row.text
                  )
                ).includes(
                  normalizedQuery
                )
            );

          if (
            matchingRows.length
          ) {

            score +=
              Math.min(
                matchingRows.length *
                3,
                30
              );

          }

          return {

            document,

            score

          };

        }
      )
      .filter(
        item =>
          item.score >
          0
      );

  scored.sort(
    (
      a,
      b
    ) => {

      if (
        state.searchSort ===
        'relevance'
      ) {

        if (
          b.score !==
          a.score
        ) {

          return (
            b.score -
            a.score
          );

        }

        return documentTitle(
          a.document
        ).localeCompare(
          documentTitle(
            b.document
          ),
          undefined,
          {
            sensitivity:
              'base'
          }
        );

      }

      return 0;

    }
  );

  if (
    state.searchSort !==
    'relevance'
  ) {

    return sortDocuments(
      scored.map(
        item =>
          item.document
      ),
      state.searchSort
    );

  }

  return scored.map(
    item =>
      item.document
  );

}


/* =========================================================
   SEARCH PAGE SOURCE MATCHES
   ========================================================= */

function getDocumentSearchMatches(
  document
) {

  if (
    !document ||
    !state.query.trim()
  ) {

    return [];

  }

  const query =
    normalizeSearchText(
      state.query.trim()
    );

  return state.searchIndex
    .filter(
      row =>
        row.bookId ===
          document.id &&
        (
          row.normalized ||
          normalizeSearchText(
            row.text
          )
        ).includes(
          query
        )
    )
    .sort(
      (
        a,
        b
      ) =>
        scoreSearchResult(
          b
        ) -
        scoreSearchResult(
          a
        )
    )
    .slice(
      0,
      5
    );

}


/* =========================================================
   SEARCH SNIPPET
   ========================================================= */

function makeSearchSnippet(
  row
) {

  const text =
    String(
      row?.text ||
      ''
    )
      .replace(
        /\s+/g,
        ' '
      )
      .trim();

  if (
    text.length <=
    300
  ) {

    return text;

  }

  const query =
    normalizeSearchText(
      state.query.trim()
    );

  const normalized =
    normalizeSearchText(
      text
    );

  const position =
    query
      ? normalized.indexOf(
          query
        )
      : -1;

  if (
    position >=
    0
  ) {

    const start =
      Math.max(
        0,
        position -
          120
      );

    const end =
      Math.min(
        text.length,
        start +
          300
      );

    return (
      (
        start >
        0
          ? '…'
          : ''
      ) +
      text.slice(
        start,
        end
      ) +
      (
        end <
        text.length
          ? '…'
          : ''
      )
    );

  }

  return (
    text.slice(
      0,
      300
    ) +
    '…'
  );

}


/* =========================================================
   SEARCH RESULT CARD
   ========================================================= */

function searchDocumentCard(
  document
) {

  const matches =
    getDocumentSearchMatches(
      document
    );

  const metadata =
    getMetadata(
      document
    );

  const isFavorite =
    state.favorites.includes(
      document.id
    );

  return `

    <div
      class="card"
      style="
        margin-bottom:10px;
        cursor:pointer
      "
      onclick="
        openDocumentDetails(
          '${escapeAttribute(
            document.id
          )}'
        )
      ">

      <div
        class="card-body">

        <div
          style="
            display:flex;
            align-items:flex-start;
            gap:11px
          ">

          ${documentIcon()}

          <div
            style="
              flex:1;
              min-width:0
            ">

            <div
              style="
                display:flex;
                align-items:flex-start;
                justify-content:space-between;
                gap:10px
              ">

              <div
                style="
                  min-width:0
                ">

                <h3
                  style="
                    overflow-wrap:anywhere
                  ">

                  ${escapeHtml(
                    documentTitle(
                      document
                    )
                  )}

                </h3>

                <div
                  class="muted"
                  style="
                    margin-top:3px
                  ">

                  ${escapeHtml(
                    document.path ||
                    ''
                  )}

                </div>

              </div>

              <button
                type="button"
                class="favorite-mark ${
                  isFavorite
                    ? 'active'
                    : ''
                }"
                onclick="
                  event.stopPropagation();

                  toggleFavorite(
                    '${escapeAttribute(
                      document.id
                    )}'
                  );
                ">

                ${
                  isFavorite
                    ? '★'
                    : '☆'
                }

              </button>

            </div>

            <div
              style="
                display:flex;
                flex-wrap:wrap;
                gap:7px;
                margin-top:9px
              ">

              ${renderStatus(
                document
              )}

              <span
                class="tag">

                ${escapeHtml(
                  metadata.category ||
                  t('unknown')
                )}

              </span>

              ${
                metadata.department
                  ? `

                    <span
                      class="tag">

                      ${escapeHtml(
                        metadata.department
                      )}

                    </span>

                  `
                  : ''
              }

            </div>

            ${
              matches.length
                ? `

                  <div
                    class="ai-source-list"
                    style="
                      margin-top:12px
                    ">

                    ${matches
                      .map(
                        row => `

                          <div
                            class="ai-source-item"
                            onclick="
                              event.stopPropagation();

                              openDocument(
                                '${escapeAttribute(
                                  document.id
                                )}'
                              );
                            ">

                            <strong>

                              ${t(
                                'snippet'
                              )}

                              ·

                              ${t(
                                'page'
                              )}

                              ${Number(
                                row.page
                              )}

                            </strong>

                            <span>

                              ${escapeHtml(
                                makeSearchSnippet(
                                  row
                                )
                              )}

                            </span>

                          </div>

                        `
                      )
                      .join('')}

                  </div>

                `
                : ''
            }

          </div>

        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   SEARCH SCREEN
   ========================================================= */

function search() {

  if (
    !BOOKS.length
  ) {

    return dmsLayout(`

      ${pageHeader(
        t('search'),
        t('search'),
        t('folderNotSelected'),
        `
          <button
            type="button"
            class="btn btn-primary"
            onclick="
              chooseBooksFolder()
            ">

            📁

            ${t(
              'chooseFolder'
            )}

          </button>
        `
      )}

      <div class="card">

        <div
          class="document-empty">

          <strong>

            ${t(
              'noDocuments'
            )}

          </strong>

        </div>

      </div>

    `);

  }

  if (
    !state.searchReady &&
    !state.searchLoading
  ) {

    buildSearchIndex();

  }

  const documents =
    getVisibleSearchDocuments();

  return dmsLayout(`

    ${pageHeader(
      t('search'),
      t('search'),
      t(
        'searchFullText'
      )
    )}

    ${documentsSearchPanel()}

    ${
      state.searchLoading
        ? `

          <div
            class="card"
            style="
              margin-top:13px
            ">

            <div
              class="working">

              <div
                class="dot">
              </div>

              <div
                style="
                  margin-top:15px
                ">

                ${t(
                  'preparingSearch'
                )}

              </div>

              <div
                class="muted"
                style="
                  margin-top:6px
                ">

                ${BOOKS.length}

                ${t(
                  'documents'
                )}

              </div>

            </div>

          </div>

        `
        : ''
    }

    ${
      !state.searchReady &&
      !state.searchLoading
        ? `

          <div
            class="alert alert-warning"
            style="
              margin-top:13px
            ">

            ${t(
              'searchError'
            )}

          </div>

        `
        : ''
    }

    <div
      class="section">

      <div
        class="document-toolbar">

        <div
          class="document-toolbar-left">

          <span
            class="document-count">

            ${documents.length}

            ${t('results')}

          </span>

        </div>

        <div
          class="document-toolbar-right">

          ${
            state.query
              ? `

                <span
                  class="tag">

                  "${escapeHtml(
                    state.query
                  )}"

                </span>

              `
              : ''
          }

        </div>

      </div>

      ${
        documents.length
          ? documents
              .slice(
                0,
                100
              )
              .map(
                document =>
                  searchDocumentCard(
                    document
                  )
              )
              .join('')
          : `

            <div
              class="card">

              <div
                class="document-empty">

                <strong>

                  ${
                    state.query
                      ? t(
                          'noDocuments'
                        )
                      : t(
                          'searchFullText'
                        )
                  }

                </strong>

              </div>

            </div>

          `
      }

    </div>

  `);

}


/* =========================================================
   CATEGORIES SCREEN
   ========================================================= */

function categories() {

  const categoriesList =
    getCategories();

  return dmsLayout(`

    ${pageHeader(
      t('categories'),
      t('categories'),
      t(
        'categoryOverview'
      )
    )}

    ${
      categoriesList.length
        ? `

          <div
            class="category-grid">

            ${categoriesList
              .map(
                category => {

                  const documents =
                    getCategoryDocuments(
                      category
                    );

                  const active =
                    state.activeCategory ===
                    category;

                  return `

                    <button
                      type="button"
                      class="category-card"
                      style="
                        text-align:left;
                        ${
                          active
                            ? 'border-color:#8eafe0;box-shadow:0 0 0 3px #2563eb12'
                            : ''
                        }
                      "
                      onclick="
                        openCategory(
                          '${escapeAttribute(
                            category
                          )}'
                        )
                      ">

                      <div
                        class="category-icon">

                        ▦

                      </div>

                      <div
                        class="category-name">

                        ${escapeHtml(
                          category
                        )}

                      </div>

                      <div
                        class="category-meta">

                        ${documents.length}

                        ${t(
                          'documentsInCategory'
                        )}

                      </div>

                    </button>

                  `;

                }
              )
              .join('')}

          </div>

        `
        : `

          <div class="card">

            <div
              class="document-empty">

              <strong>

                ${t(
                  'noCategories'
                )}

              </strong>

            </div>

          </div>

        `
    }

    ${
      state.activeCategory
        ? `

          <div
            class="section">

            <div
              class="document-toolbar">

              <div
                class="document-toolbar-left">

                <strong
                  style="
                    font-size:12px
                  ">

                  ${escapeHtml(
                    state.activeCategory
                  )}

                </strong>

                <span
                  class="tag">

                  ${
                    getCategoryDocuments(
                      state.activeCategory
                    ).length
                  }

                </span>

              </div>

              <div
                class="document-toolbar-right">

                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  onclick="
                    clearActiveCategory()
                  ">

                  ${t(
                    'reset'
                  )}

                </button>

              </div>

            </div>

            ${documentTable(
              getCategoryDocuments(
                state.activeCategory
              )
            )}

          </div>

        `
        : ''
    }

  `);

}


/* =========================================================
   OPEN CATEGORY
   ========================================================= */

function openCategory(
  category
) {

  state.activeCategory =
    category;

  state.activeStatus =
    'all';

  state.activeDepartment =
    '';

  save();

  go('categories');

}


/* =========================================================
   CLEAR ACTIVE CATEGORY
   ========================================================= */

function clearActiveCategory() {

  state.activeCategory =
    '';

  save();

  render();

}


/* =========================================================
   RECENT SCREEN
   ========================================================= */

function recent() {

  const documents =
    getRecentDocuments();

  return dmsLayout(`

    ${pageHeader(
      t('recent'),
      t('recentDocuments'),
      t(
        'recentDocuments'
      )
    )}

    ${
      documents.length
        ? `

          ${documentTable(
            documents
          )}

        `
        : `

          <div class="card">

            <div
              class="document-empty">

              <strong>

                ${t(
                  'noRecent'
                )}

              </strong>

            </div>

          </div>

        `
    }

  `);

}


/* =========================================================
   FAVORITES SCREEN
   ========================================================= */

function favorites() {

  const documents =
    getFavoriteDocuments();

  return dmsLayout(`

    ${pageHeader(
      t('favorites'),
      t('favorites'),
      t(
        'favoriteCount'
      )
    )}

    ${
      documents.length
        ? `

          ${documentTable(
            documents
          )}

        `
        : `

          <div class="card">

            <div
              class="document-empty">

              <strong>

                ${t(
                  'noFavorites'
                )}

              </strong>

            </div>

          </div>

        `
    }

  `);

}


/* =========================================================
   REVIEW SCREEN
   ========================================================= */

function review() {

  const documents =
    getReviewDocuments();

  return dmsLayout(`

    ${pageHeader(
      t('review'),
      t('reviewQueue'),
      t(
        'reviewQueue'
      )
    )}

    ${
      documents.length
        ? `

          <div class="review-list">

            ${documents
              .map(
                document => {

                  const metadata =
                    getMetadata(
                      document
                    );

                  const reviewDate =
                    metadata.reviewDate ||
                    '';

                  const isOverdue =
                    reviewDate &&
                    new Date(
                      reviewDate
                    ) <
                      new Date();

                  return `

                    <div
                      class="review-item">

                      ${documentIcon()}

                      <div
                        class="review-item-main">

                        <div
                          class="review-item-title">

                          ${escapeHtml(
                            documentTitle(
                              document
                            )
                          )}

                        </div>

                        <div
                          class="review-item-meta">

                          ${escapeHtml(
                            metadata.category ||
                            ''
                          )}

                          ${
                            metadata.department
                              ? (
                                  ' · ' +
                                  escapeHtml(
                                    metadata.department
                                  )
                                )
                              : ''
                          }

                        </div>

                      </div>

                      <div
                        class="${
                          isOverdue
                            ? 'review-item-date overdue'
                            : 'review-item-date'
                        }">

                        ${
                          reviewDate
                            ? formatDate(
                                reviewDate
                              )
                            : t(
                                'needsReview'
                              )
                        }

                      </div>

                      ${renderStatus(
                        document
                      )}

                      <button
                        type="button"
                        class="btn btn-secondary btn-sm"
                        onclick="
                          openDocumentDetails(
                            '${escapeAttribute(
                              document.id
                            )}'
                          )
                        ">

                        ${t(
                          'details'
                        )}

                      </button>

                    </div>

                  `;

                }
              )
              .join('')}

          </div>

        `
        : `

          <div class="card">

            <div
              class="document-empty">

              <strong>

                ${t(
                  'noReview'
                )}

              </strong>

            </div>

          </div>

        `
    }

  `);

}


/* =========================================================
   ARCHIVE SCREEN
   ========================================================= */

function archive() {

  const documents =
    getArchivedDocuments();

  return dmsLayout(`

    ${pageHeader(
      t('archive'),
      t('archive'),
      t(
        'archivedDocuments'
      )
    )}

    ${
      documents.length
        ? `

          <div class="document-table-wrap">

            <table
              class="document-table">

              <thead>

                <tr>

                  <th>

                    &nbsp;

                  </th>

                  <th>

                    ${t('title')}

                  </th>

                  <th>

                    ${t('category')}

                  </th>

                  <th>

                    ${t('department')}

                  </th>

                  <th>

                    ${t('status')}

                  </th>

                  <th>

                    ${t('lastModified')}

                  </th>

                  <th>

                    ${t('actions')}

                  </th>

                </tr>

              </thead>

              <tbody>

                ${documents
                  .map(
                    document =>
                      archivedDocumentRow(
                        document
                      )
                  )
                  .join('')}

              </tbody>

            </table>

          </div>

        `
        : `

          <div class="card">

            <div
              class="document-empty">

              <strong>

                ${t(
                  'noArchive'
                )}

              </strong>

            </div>

          </div>

        `
    }

  `);

}


/* =========================================================
   ARCHIVED DOCUMENT ROW
   ========================================================= */

function archivedDocumentRow(
  document
) {

  const metadata =
    getMetadata(
      document
    );

  return `

    <tr
      onclick="
        openDocumentDetails(
          '${escapeAttribute(
            document.id
          )}'
        )
      ">

      <td>

        ${documentIcon()}

      </td>

      <td>

        <div
          class="document-name-copy">

          <strong>

            ${escapeHtml(
              documentTitle(
                document
              )
            )}

          </strong>

          <span>

            ${escapeHtml(
              document.filename ||
              ''
            )}

          </span>

        </div>

      </td>

      <td>

        ${escapeHtml(
          metadata.category ||
          '—'
        )}

      </td>

      <td>

        ${escapeHtml(
          metadata.department ||
          '—'
        )}

      </td>

      <td>

        ${renderStatus(
          document
        )}

      </td>

      <td>

        ${formatDate(
          document.lastModified
        )}

      </td>

      <td>

        <div
          class="document-actions"
          onclick="
            event.stopPropagation()
          ">

          <button
            type="button"
            class="btn btn-secondary btn-sm"
            onclick="
              restoreDocument(
                '${escapeAttribute(
                  document.id
                )}'
              )
            ">

            ${t(
              'restoreDocument'
            )}

          </button>

        </div>

      </td>

    </tr>

  `;

}


/* =========================================================
   SELECTED DOCUMENT HELPERS
   ========================================================= */

function getSelectedDocuments() {

  const selected =
    new Set(
      state.selectedDocumentIds
    );

  return BOOKS.filter(
    document =>
      selected.has(
        document.id
      )
  );

}


function getSelectedAiDocuments() {

  const selected =
    new Set(
      state.selectedAiDocuments
    );

  return BOOKS.filter(
    document =>
      selected.has(
        document.id
      )
  );

}


/* =========================================================
   CLEAR DOCUMENT SELECTION
   ========================================================= */

function clearDocumentSelection() {

  state.selectedDocumentIds =
    [];

  save();

  render();

}


/* =========================================================
   OPEN DOCUMENT DETAILS
   ========================================================= */

function openDocumentDetails(
  documentId
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  state.documentId =
    document.id;

  state.sourceDocumentId =
    document.id;

  save();

  state.screen =
    'document';

  render();

  window.scrollTo({
    top:
      0,
    behavior:
      'smooth'
  });

}


/* =========================================================
   DOCUMENT DETAILS
   ========================================================= */

function documentDetails() {

  const document =
    getDocumentById(
      state.documentId
    );

  if (!document) {

    go('documents');

    return '';

  }

  const metadata =
    getMetadata(
      document
    );

  const isFavorite =
    state.favorites.includes(
      document.id
    );

  const status =
    getDocumentStatus(
      document
    );

  const tags =
    metadata.tags ||
    [];

  return dmsLayout(`

    <div
      class="top">

      <button
        type="button"
        class="back"
        onclick="
          go('documents')
        ">

        ‹

      </button>

      <div
        style="
          min-width:0
        ">

        <div
          class="eyebrow">

          ${t('documents')}

        </div>

        <strong
          style="
            display:block;
            margin-top:3px;
            font-size:15px;
            overflow-wrap:anywhere
          ">

          ${escapeHtml(
            documentTitle(
              document
            )
          )}

        </strong>

      </div>

    </div>


    <div
      class="document-detail">

      <div
        class="document-detail-main">

        <div
          class="document-hero">

          <div
            class="document-hero-top">

            <div
              class="document-large-icon">

              PDF

            </div>

            <div
              class="document-hero-copy">

              <h1>

                ${escapeHtml(
                  documentTitle(
                    document
                  )
                )}

              </h1>

              <div
                class="document-id">

                ${escapeHtml(
                  document.id
                )}

              </div>

              <div
                style="
                  margin-top:8px
                ">

                ${renderStatus(
                  document
                )}

              </div>

            </div>

          </div>

          <div
            class="document-hero-actions">

            <button
              type="button"
              class="btn btn-primary"
              onclick="
                openDocument(
                  '${escapeAttribute(
                    document.id
                  )}'
                )
              ">

              ${t(
                'openPdf'
              )}

            </button>

            <button
              type="button"
              class="btn btn-secondary"
              onclick="
                toggleFavorite(
                  '${escapeAttribute(
                    document.id
                  )}'
                )
              ">

              ${
                isFavorite
                  ? '★'
                  : '☆'
              }

              ${
                isFavorite
                  ? t(
                      'removeFavorite'
                    )
                  : t(
                      'markFavorite'
                    )
              }

            </button>

            ${
              status ===
                'archived'
                ? `

                  <button
                    type="button"
                    class="btn btn-secondary"
                    onclick="
                      restoreDocument(
                        '${escapeAttribute(
                          document.id
                        )}'
                      )
                    ">

                    ${t(
                      'restoreDocument'
                    )}

                  </button>

                `
                : `

                  <button
                    type="button"
                    class="btn btn-secondary"
                    onclick="
                      updateDocumentStatus(
                        '${escapeAttribute(
                          document.id
                        )}',
                        'archived'
                      )
                    ">

                    ${t(
                      'markArchived'
                    )}

                  </button>

                `
            }

          </div>


          <div
            class="metadata-list">

            ${metadataItem(
              t('filename'),
              document.filename
            )}

            ${metadataItem(
              t('folder'),
              document.path
            )}

            ${metadataItem(
              t('category'),
              metadata.category
            )}

            ${metadataItem(
              t('subcategory'),
              metadata.subcategory
            )}

            ${metadataItem(
              t('department'),
              metadata.department
            )}

            ${metadataItem(
              t('owner'),
              metadata.owner
            )}

            ${metadataItem(
              t('author'),
              metadata.author
            )}

            ${metadataItem(
              t('version'),
              metadata.version
            )}

            ${metadataItem(
              t('fileSize'),
              formatFileSize(
                document.fileSize
              )
            )}

            ${metadataItem(
              t('pages'),
              document.pages
                ? String(
                    document.pages
                  )
                : '—'
            )}

            ${metadataItem(
              t('lastModified'),
              formatDate(
                document.lastModified
              )
            )}

            ${metadataItem(
              t('documentDate'),
              formatDate(
                metadata.documentDate
              )
            )}

          </div>


          ${
            tags.length
              ? `

                <div
                  style="
                    margin-top:17px
                  ">

                  <div
                    class="metadata-label">

                    ${t(
                      'tags'
                    )}

                  </div>

                  <div
                    style="
                      margin-top:7px
                    ">

                    ${renderTags(
                      tags
                    )}

                  </div>

                </div>

              `
              : ''
          }

        </div>


        <div
          class="detail-section">

          <div
            class="detail-section-header">

            <div>

              <strong
                style="
                  font-size:12px
                ">

                ${t(
                  'ai'
                )}

              </strong>

              <span
                class="muted"
                style="
                  display:block;
                  margin-top:3px
                ">

                ${t(
                  'aiDescription'
                )}

              </span>

            </div>

            <button
              type="button"
              class="btn btn-primary btn-sm"
              onclick="
                startAiForDocument(
                  '${escapeAttribute(
                    document.id
                  )}'
                )
              ">

              ✦

              ${t('ai')}

            </button>

          </div>

          <div
            class="detail-section-body">

            <div
              class="ai-tool-grid">

              ${aiActionButton(
                'summary',
                '▤',
                t('aiSummary'),
                state.lang ===
                'sl'
                  ? 'Ustvari zgoščen povzetek vsebine.'
                  : 'Create a concise content summary.'
              )}

              ${aiActionButton(
                'analysis',
                '⌕',
                t('aiAnalysis'),
                state.lang ===
                'sl'
                  ? 'Analiziraj ključne točke, tveganja in ugotovitve.'
                  : 'Analyze key points, risks and findings.'
              )}

              ${aiActionButton(
                'extract',
                '⇩',
                t('aiExtract'),
                state.lang ===
                'sl'
                  ? 'Izlušči pomembne podatke in strukturirane informacije.'
                  : 'Extract important data and structured information.'
              )}

              ${aiActionButton(
                'ask',
                '?',
                t('askDocumentation'),
                state.lang ===
                'sl'
                  ? 'Postavi vprašanje o dokumentu.'
                  : 'Ask a question about the document.'
              )}

            </div>

          </div>

        </div>


        <div
          class="detail-section">

          <div
            class="detail-section-header">

            <strong>

              ${t(
                'notes'
              )}

            </strong>

          </div>

          <div
            class="detail-section-body">

            ${
              metadata.notes
                ? `
                    <div
                      class="ai-answer">

                      ${markdownToHtml(
                        metadata.notes
                      )}

                    </div>
                  `
                : `
                    <div class="muted">

                      —

                    </div>
                  `
            }

          </div>

        </div>

      </div>


      <aside
        class="document-detail-side">

        <div
          class="detail-section"
          style="
            margin-top:0
          ">

          <div
            class="detail-section-header">

            <strong>

              ${t(
                'metadata'
              )}

            </strong>

          </div>

          <div
            class="detail-section-body">

            ${metadataForm(
              document
            )}

          </div>

        </div>


        <div
          class="detail-section">

          <div
            class="detail-section-header">

            <strong>

              ${t(
                'fileInformation'
              )}

            </strong>

          </div>

          <div
            class="detail-section-body">

            ${metadataItem(
              t('type'),
              document.type
            )}

            ${metadataItem(
              t('fileSize'),
              formatFileSize(
                document.fileSize
              )
            )}

            ${metadataItem(
              t('pages'),
              document.pages
                ? String(
                    document.pages
                  )
                : '—'
            )}

            ${metadataItem(
              t('folder'),
              document.path
            )}

          </div>

        </div>

      </aside>

    </div>

  `);

}


/* =========================================================
   METADATA ITEM
   ========================================================= */

function metadataItem(
  label,
  value
) {

  return `

    <div
      class="metadata-item">

      <span
        class="metadata-label">

        ${escapeHtml(
          label
        )}

      </span>

      <span
        class="metadata-value">

        ${escapeHtml(
          value ===
            undefined ||
          value ===
            null ||
          value ===
            ''
            ? '—'
            : String(
                value
              )
        )}

      </span>

    </div>

  `;

}


/* =========================================================
   AI ACTION BUTTON
   ========================================================= */

function aiActionButton(
  action,
  icon,
  title,
  description
) {

  return `

    <button
      type="button"
      class="ai-tool"
      onclick="
        startAiAction(
          '${escapeAttribute(
            action
          )}',
          '${escapeAttribute(
            state.documentId
          )}'
        )
      ">

      <span
        class="ai-tool-icon">

        ${icon}

      </span>

      <strong>

        ${escapeHtml(
          title
        )}

      </strong>

      <span>

        ${escapeHtml(
          description
        )}

      </span>

    </button>

  `;

}


/* =========================================================
   METADATA FORM
   ========================================================= */

function metadataForm(
  document
) {

  const metadata =
    getMetadata(
      document
    );

  const categories =
    getCategories();

  const departments =
    getDepartments();

  return `

    <div
      class="formgrid">

      <div
        class="form-field">

        <label
          for="metadata-category">

          ${t(
            'category'
          )}

        </label>

        <input
          id="metadata-category"
          class="input"
          list="metadata-category-list"
          value="${escapeAttribute(
            metadata.category
          )}"
        >

        <datalist
          id="metadata-category-list">

          ${categories
            .map(
              category => `

                <option
                  value="${escapeAttribute(
                    category
                  )}">
                </option>

              `
            )
            .join('')}

        </datalist>

      </div>


      <div
        class="form-field">

        <label
          for="metadata-subcategory">

          ${t(
            'subcategory'
          )}

        </label>

        <input
          id="metadata-subcategory"
          class="input"
          value="${escapeAttribute(
            metadata.subcategory
          )}"
        >

      </div>


      <div
        class="form-field">

        <label
          for="metadata-department">

          ${t(
            'department'
          )}

        </label>

        <input
          id="metadata-department"
          class="input"
          list="metadata-department-list"
          value="${escapeAttribute(
            metadata.department
          )}"
        >

        <datalist
          id="metadata-department-list">

          ${departments
            .map(
              department => `

                <option
                  value="${escapeAttribute(
                    department
                  )}">
                </option>

              `
            )
            .join('')}

        </datalist>

      </div>


      <div
        class="form-field">

        <label
          for="metadata-owner">

          ${t(
            'owner'
          )}

        </label>

        <input
          id="metadata-owner"
          class="input"
          value="${escapeAttribute(
            metadata.owner
          )}"
        >

      </div>


      <div
        class="form-field">

        <label
          for="metadata-author">

          ${t(
            'author'
          )}

        </label>

        <input
          id="metadata-author"
          class="input"
          value="${escapeAttribute(
            metadata.author
          )}"
        >

      </div>


      <div
        class="form-field">

        <label
          for="metadata-version">

          ${t(
            'version'
          )}

        </label>

        <input
          id="metadata-version"
          class="input"
          value="${escapeAttribute(
            metadata.version
          )}"
        >

      </div>


      <div
        class="form-field">

        <label
          for="metadata-document-date">

          ${t(
            'documentDate'
          )}

        </label>

        <input
          id="metadata-document-date"
          type="date"
          class="input"
          value="${escapeAttribute(
            metadata.documentDate
          )}"
        >

      </div>


      <div
        class="form-field">

        <label
          for="metadata-status">

          ${t(
            'status'
          )}

        </label>

        <select
          id="metadata-status"
          class="select-input">

          ${[
            [
              'active',
              t('active')
            ],
            [
              'draft',
              t('draft')
            ],
            [
              'review',
              t('inReview')
            ],
            [
              'approved',
              t('approved')
            ],
            [
              'valid',
              t('valid')
            ],
            [
              'expired',
              t('expired')
            ],
            [
              'archived',
              t('archived')
            ]
          ]
            .map(
              (
                [
                  value,
                  label
                ]
              ) => `

                <option
                  value="${value}"
                  ${
                    metadata.status ===
                    value
                      ? 'selected'
                      : ''
                  }>

                  ${escapeHtml(
                    label
                  )}

                </option>

              `
            )
            .join('')}

        </select>

      </div>


      <div
        class="form-field">

        <label
          for="metadata-review-date">

          ${t(
            'review'
          )}

        </label>

        <input
          id="metadata-review-date"
          type="date"
          class="input"
          value="${escapeAttribute(
            metadata.reviewDate
          )}"
        >

      </div>


      <div
        class="form-field">

        <label
          for="metadata-expiry-date">

          ${t(
            'expired'
          )}

        </label>

        <input
          id="metadata-expiry-date"
          type="date"
          class="input"
          value="${escapeAttribute(
            metadata.expiryDate
          )}"
        >

      </div>


      <div
        class="form-field full">

        <label
          for="metadata-tags">

          ${t(
            'tags'
          )}

        </label>

        <input
          id="metadata-tags"
          class="input"
          value="${escapeAttribute(
            metadata.tags.join(
              ', '
            )
          )}"
          placeholder="tag1, tag2, tag3"
        >

      </div>


      <div
        class="form-field full">

        <label
          for="metadata-keywords">

          ${t(
            'keywords'
          )}

        </label>

        <input
          id="metadata-keywords"
          class="input"
          value="${escapeAttribute(
            metadata.keywords
          )}"
        >

      </div>


      <div
        class="form-field full">

        <label
          for="metadata-notes">

          ${t(
            'notes'
          )}

        </label>

        <textarea
          id="metadata-notes"
          class="textarea"
          style="
            min-height:100px
          "
        >${escapeHtml(
          metadata.notes
        )}</textarea>

      </div>

    </div>

    <button
      type="button"
      class="btn btn-primary btn-lg"
      style="
        width:100%;
        margin-top:12px
      "
      onclick="
        saveDocumentMetadata(
          '${escapeAttribute(
            document.id
          )}'
        )
      ">

      ${t(
        'saveMetadata'
      )}

    </button>

  `;

}


/* =========================================================
   START AI FOR DOCUMENT
   ========================================================= */

function startAiForDocument(
  documentId
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  state.selectedAiDocuments =
    [
      document.id
    ];

  state.screen =
    'ai';

  save();

  render();

}


/* =========================================================
   START AI ACTION
   ========================================================= */

function startAiAction(
  action,
  documentId
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  state.selectedAiDocuments =
    [
      document.id
    ];

  if (
    action ===
    'summary'
  ) {

    state.assistantPrompt =
      state.lang ===
      'sl'
        ? 'Pripravi jasen in strukturiran povzetek tega dokumenta. Izpostavi namen dokumenta, glavne točke, pomembne ugotovitve, obveznosti, roke in ključne podatke.'
        : 'Prepare a clear and structured summary of this document. Highlight its purpose, key points, important findings, obligations, deadlines and key data.';

  }

  else if (
    action ===
    'analysis'
  ) {

    state.assistantPrompt =
      state.lang ===
      'sl'
        ? 'Analiziraj ta dokument. Izpostavi glavne ugotovitve, tveganja, pomembne obveznosti, nejasnosti, roke, odgovornosti in vse informacije, ki so pomembne za poslovno uporabo.'
        : 'Analyze this document. Highlight the main findings, risks, important obligations, ambiguities, deadlines, responsibilities and all information relevant to business use.';

  }

  else if (
    action ===
    'extract'
  ) {

    state.assistantPrompt =
      state.lang ===
      'sl'
        ? 'Iz dokumenta izlušči pomembne strukturirane podatke. Razdeli jih na jasne kategorije, kot so datumi, osebe, organizacije, zneski, obveznosti, roki, postopki, kontaktni podatki in drugi pomembni podatki.'
        : 'Extract important structured information from this document. Organize it into clear categories such as dates, people, organizations, amounts, obligations, deadlines, procedures, contacts and other important data.';

  }

  else {

    state.assistantPrompt =
      '';

  }

  state.creationType =
    'assistant';

  state.generatedAssistant =
    '';

  state.assistantPassages =
    [];

  state.assistantError =
    '';

  state.screen =
    'ai';

  save();

  render();

}


/* =========================================================
   AI DOCUMENT SELECTOR
   ========================================================= */

function aiDocumentSelector() {

  const selected =
    new Set(
      state.selectedAiDocuments
    );

  const documents =
    getActiveDocuments();

  if (
    !documents.length
  ) {

    return `

      <div
        class="muted">

        ${t(
          'noDocuments'
        )}

      </div>

    `;

  }

  const allSelected =
    documents.length >
      0 &&
    documents.every(
      document =>
        selected.has(
          document.id
        )
    );

  return `

    <div
      class="card"
      style="
        margin-bottom:13px
      ">

      <div
        class="card-header">

        <div
          class="card-header-title">

          <strong>

            ${t(
              'chooseDocuments'
            )}

          </strong>

          <span>

            ${selected.size}

            ${t(
              'selectedDocuments'
            )}

          </span>

        </div>

        <button
          type="button"
          class="btn btn-secondary btn-sm"
          onclick="
            toggleAllAiDocuments()
          ">

          ${
            allSelected
              ? t(
                  'unselectAll'
                )
              : t(
                  'selectAll'
                )
          }

        </button>

      </div>

      <div
        class="source-selector-body">

        ${documents
          .map(
            document => `

              <label
                class="source-select-row"
                style="
                  cursor:pointer
                ">

                <input
                  type="checkbox"
                  ${
                    selected.has(
                      document.id
                    )
                      ? 'checked'
                      : ''
                  }
                  onchange="
                    toggleAiDocument(
                      '${escapeAttribute(
                        document.id
                      )}'
                    )
                  "
                >

                <span
                  class="grow">

                  <strong>

                    ${escapeHtml(
                      documentTitle(
                        document
                      )
                    )}

                  </strong>

                  <span>

                    ${escapeHtml(
                      document.path ||
                      ''
                    )}

                  </span>

                </span>

                ${renderStatus(
                  document
                )}

              </label>

            `
          )
          .join('')}

      </div>

    </div>

  `;

}


/* =========================================================
   TOGGLE ALL AI DOCUMENTS
   ========================================================= */

function toggleAllAiDocuments() {

  const documents =
    getActiveDocuments();

  const allIds =
    documents.map(
      document =>
        document.id
    );

  const allSelected =
    allIds.length >
      0 &&
    allIds.every(
      id =>
        state.selectedAiDocuments.includes(
          id
        )
    );

  state.selectedAiDocuments =
    allSelected
      ? []
      : allIds;

  save();

  render();

}

/* =========================================================
   FIND AI PASSAGES
   ========================================================= */

function findAiPassages(
  instructionText
) {

  const instruction =
    normalizeSearchText(
      String(
        instructionText ||
        ''
      ).trim()
    );

  const selectedIds =
    state.selectedAiDocuments.length
      ? state.selectedAiDocuments
      : state.selectedDocumentIds;

  const allowedIds =
    new Set(
      selectedIds.length
        ? selectedIds
        : getActiveDocuments().map(
            document =>
              document.id
          )
    );

  let candidates =
    state.searchIndex.filter(
      row =>
        row &&
        row.bookId &&
        allowedIds.has(
          row.bookId
        )
    );

  if (
    !candidates.length
  ) {

    return [];

  }

  const words =
    instruction
      .split(/\s+/)
      .map(
        word =>
          normalizeSearchText(
            word.replace(
              /^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,
              ''
            )
          )
      )
      .filter(
        word =>
          word.length >=
          3
      );

  candidates =
    candidates.map(
      row => {

        const document =
          getDocumentById(
            row.bookId
          );

        if (!document) {

          return {

            ...row,

            aiScore:
              0

          };

        }

        const metadata =
          getMetadata(
            document
          );

        const rowText =
          row.normalized ||
          normalizeSearchText(
            [
              document.title,
              document.filename,
              document.path,
              metadata.category,
              metadata.subcategory,
              metadata.department,
              metadata.owner,
              metadata.author,
              metadata.keywords,
              Array.isArray(
                metadata.tags
              )
                ? metadata.tags.join(
                    ' '
                  )
                : '',
              row.text
            ].join(' ')
          );

        let score =
          0;

        words.forEach(
          word => {

            if (
              rowText.includes(
                word
              )
            ) {

              score +=
                1;

            }

          }
        );

        if (
          instruction &&
          rowText.includes(
            instruction
          )
        ) {

          score +=
            8;

        }

        const titleText =
          normalizeSearchText(
            document.title ||
            ''
          );

        const filenameText =
          normalizeSearchText(
            document.filename ||
            ''
          );

        const categoryText =
          normalizeSearchText(
            metadata.category ||
            ''
          );

        const departmentText =
          normalizeSearchText(
            metadata.department ||
            ''
          );

        words.forEach(
          word => {

            if (
              titleText.includes(
                word
              )
            ) {

              score +=
                5;

            }

            if (
              filenameText.includes(
                word
              )
            ) {

              score +=
                3;

            }

            if (
              categoryText.includes(
                word
              )
            ) {

              score +=
                2;

            }

            if (
              departmentText.includes(
                word
              )
            ) {

              score +=
                2;

            }

          }
        );

        return {

          ...row,

          aiScore:
            score

        };

      }
    );

  candidates =
    candidates
      .filter(
        row =>
          row.aiScore >
          0
      )
      .sort(
        (
          a,
          b
        ) => {

          if (
            b.aiScore !==
            a.aiScore
          ) {

            return (
              b.aiScore -
              a.aiScore
            );

          }

          return (
            Number(
              a.page ||
              0
            ) -
            Number(
              b.page ||
              0
            )
          );

        }
      );

  /*
   * AI dobi omejeno število najboljših odlomkov.
   * Namen je preprečiti nepotrebno pošiljanje velike
   * količine podatkov v Worker.
   */

  const selected =
    candidates.slice(
      0,
      36
    );

  return selected.map(
    row => {

      const rawText =
        String(
          row.text ||
          ''
        )
          .replace(
            /\s+/g,
            ' '
          )
          .trim();

      const text =
        rawText.length >
        3000
          ? (
              rawText.slice(
                0,
                3000
              ) +
              '…'
            )
          : rawText;

      return {

        bookTitle:
          row.bookTitle ||
          '',

        filename:
          row.filename ||
          '',

        path:
          row.path ||
          '',

        category:
          row.category ||
          '',

        department:
          row.department ||
          '',

        page:
          row.page ||
          '',

        text

      };

    }
  );

}


/* =========================================================
   GET PASSAGES FOR DOCUMENTS
   ========================================================= */

function getPassagesForDocuments(
  documents
) {

  if (
    !Array.isArray(
      documents
    ) ||
    !documents.length
  ) {

    return [];

  }

  const ids =
    new Set(
      documents.map(
        document =>
          document.id
      )
    );

  const rows =
    state.searchIndex
      .filter(
        row =>
          row &&
          ids.has(
            row.bookId
          )
      );

  /*
   * Pri večjih dokumentih omejimo količino podatkov,
   * vendar ohranimo strani iz različnih dokumentov.
   */

  const selected =
    rows
      .slice(
        0,
        36
      );

  return selected.map(
    row => {

      const document =
        getDocumentById(
          row.bookId
        );

      return {

        bookTitle:
          document?.title ||
          row.bookTitle ||
          '',

        filename:
          document?.filename ||
          row.filename ||
          '',

        path:
          document?.path ||
          row.path ||
          '',

        category:
          row.category ||
          '',

        department:
          row.department ||
          '',

        page:
          row.page ||
          '',

        text:
          String(
            row.text ||
            ''
          )
            .replace(
              /\s+/g,
              ' '
            )
            .trim()
            .slice(
              0,
              3000
            )

      };

    }
  );

}


/* =========================================================
   SAVE AI WORK
   ========================================================= */

function saveGeneratedWork(
  work
) {

  const item = {

    id:
      'dms-work-' +
      Date.now() +
      '-' +
      Math.random()
        .toString(
          36
        )
        .slice(
          2,
          8
        ),

    type:
      work.type ||
      'assistant',

    title:
      work.title ||
      t('ai'),

    prompt:
      work.prompt ||
      '',

    language:
      work.language ||
      (
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English'
      ),

    length:
      work.length ||
      '',

    documentIds:
      Array.isArray(
        work.documentIds
      )
        ? work.documentIds
        : [],

    content:
      work.content ||
      '',

    passages:
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [],

    createdAt:
      new Date().toISOString()

  };

  state.works = [

    item,

    ...state.works.filter(
      existing =>
        existing &&
        existing.id !==
        item.id
    )

  ].slice(
    0,
    50
  );

  save();

  return item;

}


/* =========================================================
   AI REQUEST
   ========================================================= */

async function callAI(
  payload
) {

  const response =
    await fetch(
      AI_WORKER_URL,
      {
        method:
          'POST',

        headers: {
          'Content-Type':
            'application/json'
        },

        body:
          JSON.stringify(
            payload
          )

      }
    );

  let data =
    null;

  try {

    data =
      await response.json();

  } catch (error) {

    data =
      null;

  }

  if (
    !response.ok ||
    !data ||
    !data.success
  ) {

    throw new Error(
      data?.error ||
      (
        state.lang ===
        'sl'
          ? 'AI odgovora ni bilo mogoče ustvariti.'
          : 'Could not create the AI response.'
      )
    );

  }

  return data;

}


/* =========================================================
   AI ASSISTANT INPUT
   ========================================================= */

function setAssistantPrompt(
  value
) {

  state.assistantPrompt =
    value;

  save();

}


/* =========================================================
   BRIEF INPUT
   ========================================================= */

function setBriefTopic(
  value
) {

  state.briefTopic =
    value;

  save();

}


function setBriefLength(
  value
) {

  state.briefLength =
    String(
      value
    );

  save();

  render();

}


/* =========================================================
   ARTICLE INPUT
   ========================================================= */

function setArticleTopic(
  value
) {

  state.articleTopic =
    value;

  save();

}


/* =========================================================
   QUESTION INPUT
   ========================================================= */

function setAskPrompt(
  value
) {

  state.askPrompt =
    value;

  save();

}


/* =========================================================
   AI ASSISTANT GENERATION
   ========================================================= */

async function generateAssistant() {

  if (
    !state.assistantPrompt.trim()
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej napiši zahtevo.'
        : 'Please enter a request.'
    );

    return;

  }

  const selectedDocuments =
    getSelectedAiDocuments();

  state.creationType =
    'assistant';

  state.assistantGenerating =
    true;

  state.generatedAssistant =
    '';

  state.assistantError =
    '';

  state.assistantPassages =
    [];

  state.screen =
    'result';

  save();

  render();

  try {

    if (
      BOOKS.length &&
      !state.searchReady
    ) {

      await buildSearchIndex();

    }

    let passages =
      [];

    if (
      selectedDocuments.length
    ) {

      passages =
        findAiPassages(
          state.assistantPrompt.trim()
        );

    }

    state.assistantPassages =
      passages;

    save();

    render();

    const data =
      await callAI({

        type:
          'assistant',

        prompt:
          state.assistantPrompt.trim(),

        language:
          state.lang ===
          'sl'
            ? 'Slovenščina'
            : 'English',

        passages

      });

    state.generatedAssistant =
      String(
        data.answer ||
        data.content ||
        ''
      )
        .trim();

    if (
      !state.generatedAssistant
    ) {

      throw new Error(
        state.lang ===
        'sl'
          ? 'AI ni vrnil vsebine.'
          : 'The AI returned no content.'
      );

    }

    saveGeneratedWork({

      type:
        'assistant',

      title:
        state.assistantPrompt.trim(),

      prompt:
        state.assistantPrompt.trim(),

      language:
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English',

      documentIds:
        selectedDocuments.map(
          document =>
            document.id
        ),

      content:
        state.generatedAssistant,

      passages:
        state.assistantPassages

    });

    state.assistantGenerating =
      false;

    state.assistantError =
      '';

    save();

    render();

  } catch (error) {

    console.error(
      'DMS AI Assistant error:',
      error
    );

    state.assistantGenerating =
      false;

    state.assistantError =
      error?.message ||
      (
        state.lang ===
        'sl'
          ? 'AI odgovora ni bilo mogoče ustvariti.'
          : 'Could not create the AI response.'
      );

    save();

    render();

  }

}


/* =========================================================
   STRUCTURED BRIEF GENERATION
   ========================================================= */

async function generateBrief() {

  if (
    !state.briefTopic.trim()
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej vpiši temo.'
        : 'Please enter a topic.'
    );

    return;

  }

  const selectedDocuments =
    getSelectedAiDocuments();

  if (
    !selectedDocuments.length
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej izberi vsaj en dokument.'
        : 'Please select at least one document.'
    );

    return;

  }

  state.creationType =
    'brief';

  state.briefGenerating =
    true;

  state.generatedBrief =
    '';

  state.briefError =
    '';

  state.briefPassages =
    [];

  state.screen =
    'result';

  save();

  render();

  try {

    if (
      !state.searchReady
    ) {

      await buildSearchIndex();

    }

    const passages =
      findAiPassages(
        state.briefTopic.trim()
      );

    if (
      !passages.length
    ) {

      throw new Error(
        t('noRelevantPages')
      );

    }

    state.briefPassages =
      passages;

    save();

    render();

    const data =
      await callAI({

        type:
          'lecture',

        topic:
          state.briefTopic.trim(),

        prompt:
          state.briefTopic.trim(),

        language:
          state.lang ===
          'sl'
            ? 'Slovenščina'
            : 'English',

        length:
          state.briefLength,

        passages

      });

    state.generatedBrief =
      String(
        data.lecture ||
        data.answer ||
        data.content ||
        ''
      )
        .trim();

    if (
      !state.generatedBrief
    ) {

      throw new Error(
        state.lang ===
        'sl'
          ? 'Povzetka ni bilo mogoče ustvariti.'
          : 'The briefing could not be created.'
      );

    }

    saveGeneratedWork({

      type:
        'brief',

      title:
        state.briefTopic.trim(),

      prompt:
        state.briefTopic.trim(),

      language:
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English',

      length:
        state.briefLength,

      documentIds:
        selectedDocuments.map(
          document =>
            document.id
        ),

      content:
        state.generatedBrief,

      passages:
        state.briefPassages

    });

    state.briefGenerating =
      false;

    state.briefError =
      '';

    save();

    render();

  } catch (error) {

    console.error(
      'DMS briefing generation error:',
      error
    );

    state.briefGenerating =
      false;

    state.briefError =
      error?.message ||
      (
        state.lang ===
        'sl'
          ? 'Povzetka ni bilo mogoče ustvariti.'
          : 'The briefing could not be created.'
      );

    save();

    render();

  }

}


/* =========================================================
   LONG AI REPORT
   ========================================================= */

async function generateArticle() {

  if (
    !state.articleTopic.trim()
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej vpiši temo poročila.'
        : 'Please enter a report topic.'
    );

    return;

  }

  const selectedDocuments =
    getSelectedAiDocuments();

  if (
    !selectedDocuments.length
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej izberi vsaj en dokument.'
        : 'Please select at least one document.'
    );

    return;

  }

  state.creationType =
    'article';

  state.articleGenerating =
    true;

  state.generatedArticle =
    '';

  state.articleError =
    '';

  state.articlePassages =
    [];

  state.screen =
    'result';

  save();

  render();

  try {

    if (
      !state.searchReady
    ) {

      await buildSearchIndex();

    }

    const passages =
      findAiPassages(
        state.articleTopic.trim()
      );

    if (
      !passages.length
    ) {

      throw new Error(
        t('noRelevantPages')
      );

    }

    state.articlePassages =
      passages;

    save();

    render();

    const data =
      await callAI({

        type:
          'article',

        topic:
          state.articleTopic.trim(),

        prompt:
          state.articleTopic.trim(),

        language:
          state.lang ===
          'sl'
            ? 'Slovenščina'
            : 'English',

        minWords:
          10000,

        passages

      });

    state.generatedArticle =
      String(
        data.article ||
        data.answer ||
        data.content ||
        ''
      )
        .trim();

    if (
      !state.generatedArticle
    ) {

      throw new Error(
        state.lang ===
        'sl'
          ? 'Poročila ni bilo mogoče ustvariti.'
          : 'The report could not be created.'
      );

    }

    saveGeneratedWork({

      type:
        'article',

      title:
        state.articleTopic.trim(),

      prompt:
        state.articleTopic.trim(),

      language:
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English',

      length:
        '10000+',

      documentIds:
        selectedDocuments.map(
          document =>
            document.id
        ),

      content:
        state.generatedArticle,

      passages:
        state.articlePassages

    });

    state.articleGenerating =
      false;

    state.articleError =
      '';

    save();

    render();

  } catch (error) {

    console.error(
      'DMS article generation error:',
      error
    );

    state.articleGenerating =
      false;

    state.articleError =
      error?.message ||
      (
        state.lang ===
        'sl'
          ? 'Poročila ni bilo mogoče ustvariti.'
          : 'The report could not be created.'
      );

    save();

    render();

  }

}


/* =========================================================
   ASK DOCUMENTATION
   ========================================================= */

async function generateAsk() {

  if (
    !state.askPrompt.trim()
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej napiši vprašanje.'
        : 'Please enter a question.'
    );

    return;

  }

  const selectedDocuments =
    getSelectedAiDocuments();

  if (
    !selectedDocuments.length
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej izberi vsaj en dokument.'
        : 'Please select at least one document.'
    );

    return;

  }

  state.creationType =
    'ask';

  state.askGenerating =
    true;

  state.generatedAnswer =
    '';

  state.askError =
    '';

  state.askPassages =
    [];

  state.screen =
    'result';

  save();

  render();

  try {

    if (
      !state.searchReady
    ) {

      await buildSearchIndex();

    }

    const passages =
      findAiPassages(
        state.askPrompt.trim()
      );

    if (
      !passages.length
    ) {

      throw new Error(
        t('noRelevantPages')
      );

    }

    state.askPassages =
      passages;

    save();

    render();

    const data =
      await callAI({

        type:
          'ask',

        prompt:
          state.askPrompt.trim(),

        language:
          state.lang ===
          'sl'
            ? 'Slovenščina'
            : 'English',

        passages

      });

    state.generatedAnswer =
      String(
        data.answer ||
        data.content ||
        ''
      )
        .trim();

    if (
      !state.generatedAnswer
    ) {

      throw new Error(
        state.lang ===
        'sl'
          ? 'Odgovora ni bilo mogoče ustvariti.'
          : 'Could not create the answer.'
      );

    }

    saveGeneratedWork({

      type:
        'ask',

      title:
        state.askPrompt.trim(),

      prompt:
        state.askPrompt.trim(),

      language:
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English',

      documentIds:
        selectedDocuments.map(
          document =>
            document.id
        ),

      content:
        state.generatedAnswer,

      passages:
        state.askPassages

    });

    state.askGenerating =
      false;

    state.askError =
      '';

    save();

    render();

  } catch (error) {

    console.error(
      'DMS documentation question error:',
      error
    );

    state.askGenerating =
      false;

    state.askError =
      error?.message ||
      (
        state.lang ===
        'sl'
          ? 'Odgovora ni bilo mogoče ustvariti.'
          : 'Could not create the answer.'
      );

    save();

    render();

  }

}


/* =========================================================
   SOURCE BLOCK
   ========================================================= */

function sourceBlock(
  passages
) {

  if (
    !Array.isArray(
      passages
    ) ||
    !passages.length
  ) {

    return '';

  }

  const unique =
    [];

  const seen =
    new Set();

  passages.forEach(
    passage => {

      const key =
        [
          passage.bookTitle,
          passage.page,
          passage.text
        ].join('|');

      if (
        !seen.has(
          key
        )
      ) {

        seen.add(
          key
        );

        unique.push(
          passage
        );

      }

    }
  );

  return `

    <div
      class="detail-section">

      <div
        class="detail-section-header">

        <div>

          <strong>

            ${t(
              'sources'
            )}

          </strong>

          <span
            class="muted"
            style="
              display:block;
              margin-top:3px
            ">

            ${unique.length}

          </span>

        </div>

      </div>

      <div
        class="detail-section-body">

        <div
          class="ai-source-list"
          style="
            margin-top:0;
            padding-top:0;
            border-top:0
          ">

          ${unique
            .map(
              (
                passage,
                index
              ) => `

                <div
                  class="ai-source-item">

                  <strong>

                    ${index + 1}.

                    ${escapeHtml(
                      passage.bookTitle ||
                      ''
                    )}

                    ${
                      passage.page
                        ? (
                            ' · ' +
                            t(
                              'page'
                            ) +
                            ' ' +
                            escapeHtml(
                              passage.page
                            )
                          )
                        : ''
                    }

                  </strong>

                  <span>

                    ${escapeHtml(
                      passage.text ||
                      ''
                    )}

                  </span>

                  <button
                    type="button"
                    class="btn btn-sm btn-secondary"
                    style="
                      margin-top:7px
                    "
                    onclick="
                      openSourcePassage(
                        '${escapeAttribute(
                          passage.bookTitle ||
                          ''
                        )}',
                        '${escapeAttribute(
                          passage.page ||
                          ''
                        )}'
                      )
                    ">

                    ${t(
                      'openPage'
                    )}

                  </button>

                </div>

              `
            )
            .join('')}

        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   OPEN SOURCE PASSAGE
   ========================================================= */

function openSourcePassage(
  bookTitle,
  page
) {

  const document =
    BOOKS.find(
      item =>
        item &&
        documentTitle(
          item
        ) ===
        bookTitle
    );

  if (
    !document
  ) {

    return;

  }

  openPdf(
    document.pdf,
    Number(
      page
    ) || undefined
  );

}


/* =========================================================
   FORMAT AI TEXT
   ========================================================= */

function formatText(
  text
) {

  let html =
    escapeHtml(
      String(
        text ||
        ''
      )
    );

  html =
    html.replace(
      /^### (.*)$/gm,
      '<h3>$1</h3>'
    );

  html =
    html.replace(
      /^## (.*)$/gm,
      '<h2>$1</h2>'
    );

  html =
    html.replace(
      /^# (.*)$/gm,
      '<h1>$1</h1>'
    );

  html =
    html.replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>'
    );

  html =
    html.replace(
      /^\s*[-*]\s+(.*)$/gm,
      '<li>$1</li>'
    );

  html =
    html.replace(
      /(<li>.*<\/li>\s*)+/gs,
      '<ul>$&</ul>'
    );

  html =
    html.replace(
      /^\s*(\d+)\.\s+(.*)$/gm,
      '<li>$2</li>'
    );

  const blocks =
    html
      .split(
        /\n\s*\n/
      )
      .map(
        block =>
          block.trim()
      )
      .filter(
        Boolean
      );

  return blocks
    .map(
      block => {

        if (
          block.startsWith(
            '<h1>'
          ) ||
          block.startsWith(
            '<h2>'
          ) ||
          block.startsWith(
            '<h3>'
          ) ||
          block.startsWith(
            '<ul>'
          ) ||
          block.startsWith(
            '<ol>'
          )
        ) {

          return block;

        }

        return `

          <p
            class="ai-answer">

            ${block.replace(
              /\n/g,
              '<br>'
            )}

          </p>

        `;

      }
    )
    .join('');

}


/* =========================================================
   OPEN SAVED AI RESULT
   ========================================================= */

function openSavedWork(
  index
) {

  const work =
    state.works[
      index
    ];

  if (!work) {
    return;
  }

  state.creationType =
    work.type ||
    'assistant';

  if (
    work.type ===
    'assistant'
  ) {

    state.assistantPrompt =
      work.prompt ||
      '';

    state.generatedAssistant =
      work.content ||
      '';

    state.assistantPassages =
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [];

    state.assistantError =
      '';

  }

  else if (
    work.type ===
    'brief'
  ) {

    state.briefTopic =
      work.prompt ||
      work.title ||
      '';

    state.generatedBrief =
      work.content ||
      '';

    state.briefLength =
      work.length ||
      'standard';

    state.briefPassages =
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [];

    state.briefError =
      '';

  }

  else if (
    work.type ===
    'article'
  ) {

    state.articleTopic =
      work.prompt ||
      work.title ||
      '';

    state.generatedArticle =
      work.content ||
      '';

    state.articlePassages =
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [];

    state.articleError =
      '';

  }

  else if (
    work.type ===
    'ask'
  ) {

    state.askPrompt =
      work.prompt ||
      work.title ||
      '';

    state.generatedAnswer =
      work.content ||
      '';

    state.askPassages =
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [];

    state.askError =
      '';

  }

  state.assistantGenerating =
    false;

  state.briefGenerating =
    false;

  state.articleGenerating =
    false;

  state.askGenerating =
    false;

  state.screen =
    'result';

  save();

  render();

  window.scrollTo({

    top:
      0,

    behavior:
      'smooth'

  });

}


/* =========================================================
   DELETE SAVED AI RESULT
   ========================================================= */

function removeSavedWork(
  index
) {

  if (
    index <
      0 ||
    index >=
      state.works.length
  ) {

    return;

  }

  state.works.splice(
    index,
    1
  );

  save();

  render();

}


/* =========================================================
   DOWNLOAD AI RESULT
   ========================================================= */

function downloadSavedWork(
  index
) {

  const work =
    state.works[
      index
    ];

  if (!work) {
    return;
  }

  const title =
    String(
      work.title ||
      t('ai')
    )
      .trim();

  const content =
    String(
      work.content ||
      ''
    )
      .trim();

  const contentHtml =
    markdownToHtml(
      content
    );

  const sourceList =
    Array.isArray(
      work.passages
    )
      ? work.passages
          .map(
            passage =>
              `

                <li>

                  ${escapeHtml(
                    passage.bookTitle ||
                    ''
                  )}

                  ${
                    passage.page
                      ? (
                          ' · ' +
                          escapeHtml(
                            t('page')
                          ) +
                          ' ' +
                          escapeHtml(
                            passage.page
                          )
                        )
                      : ''
                  }

                </li>

              `
          )
          .join('')
      : '';

  const htmlDocument = `

<!doctype html>

<html
  lang="${
    state.lang ===
    'sl'
      ? 'sl'
      : 'en'
  }"
>

<head>

<meta charset="utf-8">

<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>

<title>

${escapeHtml(
  title
)}

</title>

<style>

* {
  box-sizing:
    border-box;
}

body {

  margin:
    0;

  padding:
    36px 20px;

  background:
    #f4f6f9;

  color:
    #172033;

  font-family:
    Arial,
    sans-serif;

  line-height:
    1.75;

}

.page {

  width:
    min(
      920px,
      100%
    );

  margin:
    0 auto;

  background:
    #ffffff;

  padding:
    50px 58px;

  border:
    1px solid #dfe5ec;

}

h1,
h2,
h3 {

  color:
    #172033;

}

.sources {

  margin-top:
    45px;

  padding-top:
    25px;

  border-top:
    1px solid
    #dfe5ec;

}

li {

  margin-bottom:
    7px;

}

@media(
  max-width:700px
){

  body {

    padding:
      0;

  }

  .page {

    width:
      100%;

    padding:
      25px 18px;

    border:
      0;

  }

}

</style>

</head>

<body>

<main
  class="page">

  <h1>

    ${escapeHtml(
      title
    )}

  </h1>

  <p>

    <strong>

      ${escapeHtml(
        work.type ||
        t('ai')
      )}

    </strong>

  </p>

  <article>

    ${contentHtml}

  </article>

  ${
    sourceList
      ? `

        <section
          class="sources">

          <h2>

            ${escapeHtml(
              t('sources')
            )}

          </h2>

          <ul>

            ${sourceList}

          </ul>

        </section>

      `
      : ''
  }

  <p>

    <strong>

      ${escapeHtml(
        t('created')
      )}:

    </strong>

    ${escapeHtml(
      formatDateTime(
        work.createdAt
      )
    )}

  </p>

</main>

</body>

</html>

  `.trim();

  const blob =
    new Blob(
      [
        htmlDocument
      ],
      {
        type:
          'text/html;charset=utf-8'
      }
    );

  const url =
    URL.createObjectURL(
      blob
    );

  const safeName =
    title
      .replace(
        /[<>:"/\\|?*\x00-\x1F]/g,
        ''
      )
      .replace(
        /\s+/g,
        '-'
      )
      .slice(
        0,
        100
      )
      .trim() ||
    'dms-ai-result';

  const link =
    document.createElement(
      'a'
    );

  link.href =
    url;

  link.download =
    safeName +
    '.html';

  document.body.appendChild(
    link
  );

  link.click();

  link.remove();

  setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    1000
  );

  toast(
    state.lang ===
    'sl'
      ? 'Rezultat je prenesen.'
      : 'Result downloaded.'
  );

}

/* =========================================================
   AI SCREEN
   ========================================================= */

function ai() {

  const selected =
    getSelectedAiDocuments();

  if (
    state.assistantGenerating ||
    state.briefGenerating ||
    state.articleGenerating ||
    state.askGenerating
  ) {

    return dmsLayout(`

      <div
        class="card">

        <div
          class="working">

          <div
            class="dot">
          </div>

          <h2
            style="
              margin-top:17px
            ">

            ${
              state.assistantGenerating
                ? t('preparing')

                : state.briefGenerating
                  ? (
                      state.lang ===
                      'sl'
                        ? 'Pripravljam strukturirani povzetek…'
                        : 'Preparing the structured briefing…'
                    )

                : state.articleGenerating
                  ? (
                      state.lang ===
                      'sl'
                        ? 'AI piše poročilo…'
                        : 'AI is writing the report…'
                    )

                : t('preparing')
            }

          </h2>

          <div
            class="muted">

            ${
              selected.length
                ? (
                    selected.length +
                    ' ' +
                    t(
                      'selectedDocuments'
                    )
                  )
                : ''
            }

          </div>

        </div>

      </div>

    `);

  }


  return dmsLayout(`

    ${pageHeader(
      t('ai'),
      t('aiAssistant'),
      t('aiDescription')
    )}

    ${aiDocumentSelector()}


    <div
      class="ai-layout">

      <section
        class="ai-panel">

        <div
          class="ai-panel-header">

          <div>

            <strong>

              ${
                state.creationType ===
                'brief'
                  ? t('lecture')

                  : state.creationType ===
                    'article'
                    ? t(
                        'articleWriting'
                      )

                  : state.creationType ===
                    'ask'
                    ? t(
                        'askDocumentation'
                      )

                  : t(
                      'aiAssistant'
                    )
              }

            </strong>

            <span>

              ${
                selected.length
                  ? (
                      selected.length +
                      ' ' +
                      t(
                        'selectedDocuments'
                      )
                    )
                  : (
                      state.lang ===
                      'sl'
                        ? 'Izberi dokumente za delo z dokumentacijo.'
                        : 'Select documents to work with documentation.'
                    )
              }

            </span>

          </div>

          ${
            selected.length
              ? `

                <span
                  class="status status-info">

                  ${selected.length}

                </span>

              `
              : ''
          }

        </div>


        <div
          class="ai-panel-body">

          ${aiModeButtons()}

          ${
            state.creationType ===
            'brief'
              ? aiBriefForm()

              : state.creationType ===
                'article'
                ? aiArticleForm()

              : state.creationType ===
                'ask'
                ? aiAskForm()

              : aiAssistantForm()
          }

        </div>

      </section>


      <aside>

        <div
          class="ai-panel">

          <div
            class="ai-panel-header">

            <div>

              <strong>

                ${t(
                  'ai'
                )}

              </strong>

              <span>

                ${t(
                  'aiDescription'
                )}

              </span>

            </div>

          </div>

          <div
            class="ai-panel-body">

            <div
              class="ai-tool-grid">

              ${aiQuickTool(
                'summary',
                '▤',
                t('aiSummary'),
                state.lang ===
                'sl'
                  ? 'Povzetek izbranih dokumentov.'
                  : 'Summarize selected documents.'
              )}

              ${aiQuickTool(
                'analysis',
                '⌕',
                t('aiAnalysis'),
                state.lang ===
                'sl'
                  ? 'Poslovna analiza dokumentacije.'
                  : 'Business analysis of documentation.'
              )}

              ${aiQuickTool(
                'extract',
                '⇩',
                t('aiExtract'),
                state.lang ===
                'sl'
                  ? 'Izlušči podatke.'
                  : 'Extract structured information.'
              )}

              ${aiQuickTool(
                'question',
                '?',
                t('askDocumentation'),
                state.lang ===
                'sl'
                  ? 'Vprašanja o dokumentih.'
                  : 'Questions about documents.'
              )}

            </div>

          </div>

        </div>


        <div
          class="detail-section">

          <div
            class="detail-section-header">

            <strong>

              ${t(
                'sources'
              )}

            </strong>

          </div>

          <div
            class="detail-section-body">

            <div
              class="muted"
              style="
                line-height:1.65
              ">

              ${
                selected.length
                  ? selected
                      .map(
                        document =>
                          `
                            <div
                              style="
                                padding:6px 0;
                                border-bottom:1px solid #edf1f5
                              ">

                              ${escapeHtml(
                                documentTitle(
                                  document
                                )
                              )}

                            </div>
                          `
                      )
                      .join('')
                  : (
                      state.lang ===
                      'sl'
                        ? 'Dokumenti bodo uporabljeni kot vir za AI.'
                        : 'Selected documents will be used as AI sources.'
                    )
              }

            </div>

          </div>

        </div>

      </aside>

    </div>

  `);

}


/* =========================================================
   AI MODE BUTTONS
   ========================================================= */

function aiModeButtons() {

  const modes = [

    {
      key:
        'assistant',

      label:
        t('aiAssistant'),

      icon:
        '✦'
    },

    {
      key:
        'brief',

      label:
        t('lecture'),

      icon:
        '▤'
    },

    {
      key:
        'article',

      label:
        t('articleWriting'),

      icon:
        '▰'
    },

    {
      key:
        'ask',

      label:
        t('askDocumentation'),

      icon:
        '?'
    }

  ];

  return `

    <div
      class="chips"
      style="
        margin-bottom:17px
      ">

      ${modes
        .map(
          mode => `

            <button
              type="button"
              class="chip ${
                state.creationType ===
                mode.key
                  ? 'on'
                  : ''
              }"
              onclick="
                setAiMode(
                  '${mode.key}'
                )
              ">

              ${mode.icon}

              ${escapeHtml(
                mode.label
              )}

            </button>

          `
        )
        .join('')}

    </div>

  `;

}


/* =========================================================
   SET AI MODE
   ========================================================= */

function setAiMode(
  mode
) {

  const allowed = [
    'assistant',
    'brief',
    'article',
    'ask'
  ];

  if (
    !allowed.includes(
      mode
    )
  ) {

    return;

  }

  state.creationType =
    mode;

  if (
    mode ===
    'summary'
  ) {

    state.creationType =
      'assistant';

  }

  save();

  render();

}


/* =========================================================
   AI QUICK TOOL
   ========================================================= */

function aiQuickTool(
  action,
  icon,
  title,
  description
) {

  return `

    <button
      type="button"
      class="ai-tool"
      onclick="
        runAiQuickAction(
          '${escapeAttribute(
            action
          )}'
        )
      ">

      <span
        class="ai-tool-icon">

        ${icon}

      </span>

      <strong>

        ${escapeHtml(
          title
        )}

      </strong>

      <span>

        ${escapeHtml(
          description
        )}

      </span>

    </button>

  `;

}


/* =========================================================
   RUN AI QUICK ACTION
   ========================================================= */

function runAiQuickAction(
  action
) {

  const selected =
    getSelectedAiDocuments();

  if (
    !selected.length
  ) {

    toast(
      state.lang ===
      'sl'
        ? 'Najprej izberi vsaj en dokument.'
        : 'Please select at least one document.'
    );

    return;

  }

  if (
    action ===
    'summary'
  ) {

    state.creationType =
      'assistant';

    state.assistantPrompt =
      state.lang ===
      'sl'
        ? 'Pripravi jasen in strukturiran povzetek izbranih dokumentov. Za vsak dokument navedi namen, glavne točke, pomembne ugotovitve, obveznosti, roke in druge ključne informacije. Na koncu dodaj skupni povzetek.'
        : 'Prepare a clear and structured summary of the selected documents. For each document identify its purpose, key points, important findings, obligations, deadlines and other key information. Finish with an overall summary.';

  }

  else if (
    action ===
    'analysis'
  ) {

    state.creationType =
      'assistant';

    state.assistantPrompt =
      state.lang ===
      'sl'
        ? 'Analiziraj izbrane dokumente z vidika poslovne uporabe. Izpostavi ključne ugotovitve, tveganja, obveznosti, odgovornosti, roke, nejasnosti, morebitna nasprotja med dokumenti in pomembne informacije, ki jih mora poznati podjetje.'
        : 'Analyze the selected documents from a business perspective. Highlight key findings, risks, obligations, responsibilities, deadlines, ambiguities, potential conflicts between documents and important information the company should know.';

  }

  else if (
    action ===
    'extract'
  ) {

    state.creationType =
      'assistant';

    state.assistantPrompt =
      state.lang ===
      'sl'
        ? 'Izlušči strukturirane podatke iz izbranih dokumentov. Uporabi jasne sklope za datume, osebe, organizacije, zneske, pogodbeno pomembne informacije, obveznosti, roke, postopke, kontaktne podatke, številke dokumentov in druge pomembne podatke. Ne ugibaj podatkov, ki niso navedeni.'
        : 'Extract structured information from the selected documents. Use clear sections for dates, people, organizations, amounts, contractual information, obligations, deadlines, procedures, contacts, document numbers and other important data. Do not guess information that is not stated.';

  }

  else {

    state.creationType =
      'ask';

  }

  save();

  render();

}


/* =========================================================
   ASSISTANT FORM
   ========================================================= */

function aiAssistantForm() {

  return `

    <div>

      <h3>

        ${t(
          'assistantPrompt'
        )}

      </h3>

      <textarea
        class="textarea"
        style="
          margin-top:9px;
          min-height:230px
        "
        oninput="
          setAssistantPrompt(
            this.value
          )
        "
        placeholder="${t(
          'assistantPlaceholder'
        )}">${escapeHtml(
          state.assistantPrompt
        )}</textarea>

      <div
        class="filter-actions"
        style="
          justify-content:flex-start
        ">

        <button
          type="button"
          class="btn btn-primary btn-lg"
          onclick="
            generateAssistant()
          ">

          ✦

          ${t(
            'askAI'
          )}

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   BRIEF FORM
   ========================================================= */

function aiBriefForm() {

  return `

    <div>

      <h3>

        ${t(
          'topic'
        )}

      </h3>

      <textarea
        class="textarea"
        style="
          margin-top:9px;
          min-height:150px
        "
        oninput="
          setBriefTopic(
            this.value
          )
        "
        placeholder="${t(
          'topicPlaceholder'
        )}">${escapeHtml(
          state.briefTopic
        )}</textarea>


      <h3
        style="
          margin-top:15px
        ">

        ${t(
          'length'
        )}

      </h3>

      <div
        class="chips"
        style="
          margin-top:9px
        ">

        ${[
          [
            'short',
            t('short')
          ],
          [
            'standard',
            t('standard')
          ],
          [
            'detailed',
            t('detailed')
          ]
        ]
          .map(
            (
              [
                value,
                label
              ]
            ) => `

              <button
                type="button"
                class="chip ${
                  state.briefLength ===
                  value
                    ? 'on'
                    : ''
                }"
                onclick="
                  setBriefLength(
                    '${value}'
                  )
                ">

                ${label}

              </button>

            `
          )
          .join('')}

      </div>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        style="
          margin-top:12px
        "
        onclick="
          generateBrief()
        ">

        ✦

        ${t(
          'createBrief'
        )}

      </button>

    </div>

  `;

}


/* =========================================================
   ARTICLE FORM
   ========================================================= */

function aiArticleForm() {

  return `

    <div>

      <h3>

        ${t(
          'topic'
        )}

      </h3>

      <textarea
        class="textarea"
        style="
          margin-top:9px;
          min-height:220px
        "
        oninput="
          setArticleTopic(
            this.value
          )
        "
        placeholder="${t(
          'articlePlaceholder'
        )}">${escapeHtml(
          state.articleTopic
        )}</textarea>

      <div
        class="alert alert-info"
        style="
          margin-top:11px
        ">

        ${t(
          'articleMinimum'
        )}

      </div>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        style="
          margin-top:12px
        "
        onclick="
          generateArticle()
        ">

        ✦

        ${t(
          'writeReport'
        )}

      </button>

    </div>

  `;

}


/* =========================================================
   ASK FORM
   ========================================================= */

function aiAskForm() {

  return `

    <div>

      <div
        class="alert alert-info"
        style="
          margin-bottom:13px
        ">

        ${t(
          'sourceMaterialOnly'
        )}

      </div>

      <h3>

        ${t(
          'question'
        )}

      </h3>

      <textarea
        class="textarea"
        style="
          margin-top:9px;
          min-height:220px
        "
        oninput="
          setAskPrompt(
            this.value
          )
        "
        placeholder="${t(
          'questionPlaceholder'
        )}">${escapeHtml(
          state.askPrompt
        )}</textarea>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        style="
          margin-top:12px
        "
        onclick="
          generateAsk()
        ">

        ?

        ${t(
          'askAI'
        )}

      </button>

    </div>

  `;

}


/* =========================================================
   AI RESULT SCREEN
   ========================================================= */

function result() {

  if (
    state.assistantGenerating
  ) {

    return aiGeneratingScreen(
      state.assistantPrompt
    );

  }

  if (
    state.briefGenerating
  ) {

    return aiGeneratingScreen(
      state.briefTopic
    );

  }

  if (
    state.articleGenerating
  ) {

    return aiGeneratingScreen(
      state.articleTopic
    );

  }

  if (
    state.askGenerating
  ) {

    return aiGeneratingScreen(
      state.askPrompt
    );

  }


  if (
    state.creationType ===
    'brief'
  ) {

    return resultPage(
      t('lecture'),
      state.briefTopic,
      state.generatedBrief,
      state.briefError,
      state.briefPassages,
      'generateBrief'
    );

  }


  if (
    state.creationType ===
    'article'
  ) {

    return resultPage(
      t('articleWriting'),
      state.articleTopic,
      state.generatedArticle,
      state.articleError,
      state.articlePassages,
      'generateArticle'
    );

  }


  if (
    state.creationType ===
    'ask'
  ) {

    return resultPage(
      t('askDocumentation'),
      state.askPrompt,
      state.generatedAnswer,
      state.askError,
      state.askPassages,
      'generateAsk'
    );

  }


  return resultPage(
    t('aiAssistant'),
    state.assistantPrompt,
    state.generatedAssistant,
    state.assistantError,
    state.assistantPassages,
    'generateAssistant'
  );

}


/* =========================================================
   AI GENERATING SCREEN
   ========================================================= */

function aiGeneratingScreen(
  subject
) {

  return dmsLayout(`

    <div
      class="card">

      <div
        class="working">

        <div
          class="dot">
        </div>

        <h2
          style="
            margin-top:18px
          ">

          ${t(
            'preparing'
          )}

        </h2>

        ${
          subject
            ? `

              <div
                class="muted"
                style="
                  max-width:650px;
                  margin:0 auto;
                  line-height:1.6
                ">

                ${escapeHtml(
                  subject
                )}

              </div>

            `
            : ''
        }

      </div>

    </div>

  `);

}


/* =========================================================
   RESULT PAGE
   ========================================================= */

function resultPage(
  title,
  subject,
  content,
  error,
  passages,
  retryFunction
) {

  return dmsLayout(`

    <div
      class="top">

      <button
        type="button"
        class="back"
        onclick="
          go('ai')
        ">

        ‹

      </button>

      <div
        style="
          min-width:0
        ">

        <div
          class="eyebrow">

          ${t('ai')}

        </div>

        <strong
          style="
            display:block;
            font-size:15px;
            margin-top:3px;
            overflow-wrap:anywhere
          ">

          ${escapeHtml(
            title
          )}

        </strong>

      </div>

    </div>


    <div
      class="document-detail">

      <section
        class="document-detail-main">

        <div
          class="document-hero">

          <h1
            style="
              overflow-wrap:anywhere
            ">

            ${escapeHtml(
              subject ||
              title
            )}

          </h1>

          ${
            error
              ? `

                <div
                  class="alert alert-danger"
                  style="
                    margin-top:13px
                  ">

                  ${escapeHtml(
                    error
                  )}

                </div>

                <button
                  type="button"
                  class="btn btn-primary"
                  style="
                    margin-top:12px
                  "
                  onclick="
                    ${retryFunction}()
                  ">

                  ${t(
                    'openResult'
                  )}

                </button>

              `
              : `

                <div
                  class="detail-section"
                  style="
                    margin-top:16px
                  ">

                  <div
                    class="detail-section-body">

                    ${
                      content
                        ? `
                            <div
                              class="ai-answer">

                              ${formatText(
                                content
                              )}

                            </div>
                          `
                        : `

                            <div
                              class="muted">

                              ${t(
                                'noDocuments'
                              )}

                            </div>

                          `
                    }

                  </div>

                </div>

              `
          }

        </div>

        ${
          passages?.length
            ? sourceBlock(
                passages
              )
            : ''
        }

      </section>


      <aside
        class="document-detail-side">

        <div
          class="detail-section"
          style="
            margin-top:0
          ">

          <div
            class="detail-section-header">

            <strong>

              ${t(
                'actions'
              )}

            </strong>

          </div>

          <div
            class="detail-section-body">

            <button
              type="button"
              class="btn btn-secondary"
              style="
                width:100%
              "
              onclick="
                go('ai')
              ">

              ←

              ${t(
                'ai'
              )}

            </button>

            ${
              content
                ? `

                  <button
                    type="button"
                    class="btn btn-primary"
                    style="
                      width:100%;
                      margin-top:7px
                    "
                    onclick="
                      downloadCurrentAiResult()
                    ">

                    ↓

                    ${t(
                      'download'
                    )}

                  </button>

                `
                : ''
            }

          </div>

        </div>

      </aside>

    </div>

  `);

}


/* =========================================================
   DOWNLOAD CURRENT AI RESULT
   ========================================================= */

function getCurrentAiContent() {

  if (
    state.creationType ===
    'brief'
  ) {

    return {

      title:
        state.briefTopic ||
        t('lecture'),

      content:
        state.generatedBrief,

      type:
        'brief',

      passages:
        state.briefPassages

    };

  }

  if (
    state.creationType ===
    'article'
  ) {

    return {

      title:
        state.articleTopic ||
        t('articleWriting'),

      content:
        state.generatedArticle,

      type:
        'article',

      passages:
        state.articlePassages

    };

  }

  if (
    state.creationType ===
    'ask'
  ) {

    return {

      title:
        state.askPrompt ||
        t('askDocumentation'),

      content:
        state.generatedAnswer,

      type:
        'ask',

      passages:
        state.askPassages

    };

  }

  return {

    title:
      state.assistantPrompt ||
      t('aiAssistant'),

    content:
      state.generatedAssistant,

    type:
      'assistant',

    passages:
      state.assistantPassages

  };

}


function downloadCurrentAiResult() {

  const current =
    getCurrentAiContent();

  if (
    !current.content
  ) {

    return;

  }

  const temp = {

    ...current,

    language:
      state.lang ===
      'sl'
        ? 'Slovenščina'
        : 'English',

    createdAt:
      new Date().toISOString()

  };

  state.works = [

    temp,

    ...state.works

  ];

  const contentHtml =
    markdownToHtml(
      current.content
    );

  const sourceList =
    Array.isArray(
      current.passages
    )
      ? current.passages
          .map(
            passage => `

              <li>

                ${escapeHtml(
                  passage.bookTitle ||
                  ''
                )}

                ${
                  passage.page
                    ? (
                        ' · ' +
                        escapeHtml(
                          t('page')
                        ) +
                        ' ' +
                        escapeHtml(
                          passage.page
                        )
                      )
                    : ''
                }

              </li>

            `
          )
          .join('')
      : '';

  const htmlDocument = `

<!doctype html>

<html
  lang="${
    state.lang ===
    'sl'
      ? 'sl'
      : 'en'
  }"
>

<head>

<meta charset="utf-8">

<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>

<title>

${escapeHtml(
  current.title
)}

</title>

<style>

body{

  margin:
    0;

  padding:
    40px 20px;

  background:
    #f4f6f9;

  color:
    #172033;

  font-family:
    Arial,
    sans-serif;

  line-height:
    1.75;

}

.page{

  width:
    min(
      920px,
      100%
    );

  margin:
    0 auto;

  padding:
    50px 58px;

  background:
    #fff;

  border:
    1px solid
    #dfe5ec;

}

h1,
h2,
h3{

  color:
    #172033;

}

.sources{

  margin-top:
    45px;

  padding-top:
    25px;

  border-top:
    1px solid
    #dfe5ec;

}

@media(
  max-width:700px
){

  body{

    padding:
      0;

  }

  .page{

    width:
      100%;

    padding:
      25px 18px;

    border:
      0;

  }

}

</style>

</head>

<body>

<main
  class="page">

  <h1>

    ${escapeHtml(
      current.title
    )}

  </h1>

  <article>

    ${contentHtml}

  </article>

  ${
    sourceList
      ? `

        <section
          class="sources">

          <h2>

            ${escapeHtml(
              t('sources')
            )}

          </h2>

          <ul>

            ${sourceList}

          </ul>

        </section>

      `
      : ''
  }

</main>

</body>

</html>

  `.trim();

  const blob =
    new Blob(
      [
        htmlDocument
      ],
      {
        type:
          'text/html;charset=utf-8'
      }
    );

  const url =
    URL.createObjectURL(
      blob
    );

  const safeName =
    String(
      current.title ||
      'dms-ai-result'
    )
      .replace(
        /[<>:"/\\|?*\x00-\x1F]/g,
        ''
      )
      .replace(
        /\s+/g,
        '-'
      )
      .slice(
        0,
        100
      )
      .trim() ||
    'dms-ai-result';

  const link =
    document.createElement(
      'a'
    );

  link.href =
    url;

  link.download =
    safeName +
    '.html';

  document.body.appendChild(
    link
  );

  link.click();

  link.remove();

  setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    1000
  );

  toast(
    state.lang ===
    'sl'
      ? 'Rezultat je prenesen.'
      : 'Result downloaded.'
  );

}


/* =========================================================
   SAVED AI RESULTS SCREEN
   ========================================================= */

function saved() {

  const works =
    Array.isArray(
      state.works
    )
      ? state.works
      : [];

  return dmsLayout(`

    ${pageHeader(
      t('saved'),
      t('saved'),
      state.lang ===
      'sl'
        ? 'Shranjeni rezultati umetne inteligence.'
        : 'Saved artificial intelligence results.'
    )}

    ${
      works.length
        ? `

          <div
            class="work-list">

            ${works
              .map(
                (
                  work,
                  index
                ) =>
                  savedWorkRow(
                    work,
                    index
                  )
              )
              .join('')}

          </div>

        `
        : `

          <div
            class="card">

            <div
              class="document-empty">

              <strong>

                ${t(
                  'noResults'
                )}

              </strong>

            </div>

          </div>

        `
    }

  `);

}


/* =========================================================
   SAVED WORK ROW
   ========================================================= */

function savedWorkRow(
  work,
  index
) {

  const typeLabels = {

    assistant:
      t('aiAssistant'),

    brief:
      t('lecture'),

    article:
      t('articleWriting'),

    ask:
      t('askDocumentation')

  };

  const type =
    typeLabels[
      work.type
    ] ||
    t('ai');

  const preview =
    String(
      work.content ||
      ''
    )
      .replace(
        /\s+/g,
        ' '
      )
      .trim();

  return `

    <div
      class="work-item">

      <div
        class="document-file-icon"
        style="
          width:33px;
          height:36px
        ">

        AI

      </div>

      <div
        class="work-item-main">

        <div
          class="work-item-title">

          ${escapeHtml(
            work.title ||
            type
          )}

        </div>

        <div
          class="work-item-meta">

          ${escapeHtml(
            type
          )}

          ·

          ${escapeHtml(
            formatDateTime(
              work.createdAt
            )
          )}

        </div>

        ${
          preview
            ? `

              <div
                class="muted"
                style="
                  margin-top:6px;
                  overflow:hidden;
                  text-overflow:ellipsis;
                  white-space:nowrap
                ">

                ${escapeHtml(
                  preview
                )}

              </div>

            `
            : ''
        }

      </div>

      <div
        class="work-item-actions">

        <button
          type="button"
          class="btn btn-secondary btn-sm"
          onclick="
            openSavedWork(
              ${index}
            )
          ">

          ${t(
            'openResult'
          )}

        </button>

        <button
          type="button"
          class="btn btn-secondary btn-sm"
          onclick="
            downloadSavedWork(
              ${index}
            )
          ">

          ${t(
            'download'
          )}

        </button>

        <button
          type="button"
          class="btn btn-ghost btn-sm"
          onclick="
            removeSavedWork(
              ${index}
            )
          ">

          ${t(
            'delete'
          )}

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   SETTINGS SCREEN
   ========================================================= */

function settings() {

  return dmsLayout(`

    ${pageHeader(
      t('settings'),
      t('settings'),
      t(
        'settingsDescription'
      )
    )}


    <div
      class="dashboard-columns equal">

      <section
        class="card">

        <div
          class="card-header">

          <div
            class="card-header-title">

            <strong>

              ${t(
                'repository'
              )}

            </strong>

            <span>

              ${t(
                'localOnly'
              )}

            </span>

          </div>

        </div>

        <div
          class="card-body">

          ${
            state.localFolderName
              ? `

                <div
                  class="local-folder-path">

                  ${escapeHtml(
                    state.localFolderName
                  )}

                </div>

              `
              : `

                <div
                  class="alert alert-warning">

                  ${t(
                    'folderNotSelected'
                  )}

                </div>

              `
          }

          <div
            class="local-library-actions">

            <button
              type="button"
              class="btn btn-primary"
              onclick="
                chooseBooksFolder()
              ">

              ${
                state.localFolderName
                  ? t(
                      'changeFolder'
                    )
                  : t(
                      'chooseFolder'
                    )
              }

            </button>

            ${
              state.localFolderName
                ? `

                  <button
                    type="button"
                    class="btn btn-secondary"
                    onclick="
                      refreshBooks()
                    ">

                    ↻

                    ${t(
                      'refresh'
                    )}

                  </button>

                `
                : ''
            }

          </div>

        </div>

      </section>


      <section
        class="card">

        <div
          class="card-header">

          <div
            class="card-header-title">

            <strong>

              ${t(
                'language'
              )}

            </strong>

            <span>

              ${state.lang ===
              'sl'
                ? 'Slovenščina'
                : 'English'}

            </span>

          </div>

        </div>

        <div
          class="card-body">

          ${languageSelector()}

          <div
            class="muted">

            ${
              state.lang ===
              'sl'
                ? 'Jezik uporabniškega vmesnika.'
                : 'User interface language.'
            }

          </div>

        </div>

      </section>

    </div>


    <div
      class="section">

      <div
        class="detail-section"
        style="
          margin-top:0
        ">

        <div
          class="detail-section-header">

          <strong>

            ${t(
              'securityNote'
            )}

          </strong>

        </div>

        <div
          class="detail-section-body">

          <div
            class="alert alert-info">

            ${escapeHtml(
              t(
                'securityNote'
              )
            )}

          </div>

        </div>

      </div>

    </div>

  `);

}

/* =========================================================
   PDF SEARCH RESULT OPENING
   ========================================================= */

function openSearchResult(
  bookId,
  page
) {

  const document =
    getDocumentById(
      bookId
    );

  if (!document) {
    return;
  }

  state.documentId =
    document.id;

  state.sourceDocumentId =
    document.id;

  addRecentDocument(
    document
  );

  openPdf(
    document.pdf,
    Number(
      page
    ) || undefined
  );

}


/* =========================================================
   SEARCH INDEX STATUS
   ========================================================= */

function getSearchIndexCount() {

  return Array.isArray(
    state.searchIndex
  )
    ? state.searchIndex.length
    : 0;

}


/* =========================================================
   UPDATE PAGE COUNTS FROM INDEX
   ========================================================= */

function updateDocumentPageCounts() {

  if (
    !Array.isArray(
      state.searchIndex
    )
  ) {

    return;

  }

  BOOKS.forEach(
    document => {

      const pages =
        state.searchIndex
          .filter(
            row =>
              row &&
              row.bookId ===
              document.id
          )
          .map(
            row =>
              Number(
                row.page ||
                0
              )
          );

      if (
        pages.length
      ) {

        document.pages =
          Math.max(
            ...pages
          );

      }

    }
  );

  save();

}


/* =========================================================
   DOCUMENTS FROM FOLDER
   ========================================================= */

function getDocumentFolder(
  document
) {

  if (
    !document ||
    !document.path
  ) {

    return '';

  }

  const parts =
    getPathParts(
      document.path
    );

  return parts
    .slice(
      0,
      -1
    )
    .join('/');

}


/* =========================================================
   DOCUMENT CATEGORY NORMALIZATION
   ========================================================= */

function ensureMetadataForDocuments() {

  let changed =
    false;

  BOOKS.forEach(
    document => {

      const existing =
        state.metadata[
          document.id
        ];

      if (
        existing
      ) {

        return;

      }

      state.metadata[
        document.id
      ] = {

        category:
          document.category ||
          '',

        subcategory:
          document.subcategory ||
          '',

        department:
          '',

        owner:
          '',

        author:
          '',

        documentDate:
          '',

        status:
          'active',

        version:
          '1.0',

        tags:
          [],

        keywords:
          '',

        notes:
          '',

        reviewDate:
          '',

        expiryDate:
          ''

      };

      changed =
        true;

    }
  );

  if (
    changed
  ) {

    save();

  }

}


/* =========================================================
   DOCUMENT REPOSITORY CONTROLS
   ========================================================= */

function localLibraryControls() {

  return `

    <div
      class="local-library-card">

      <div
        class="local-library-head">

        <div
          class="local-library-copy">

          <strong>

            ${t(
              'localDocuments'
            )}

          </strong>

          <span>

            ${
              state.localFolderName
                ? (
                    t('selectedFolder') +
                    ': ' +
                    state.localFolderName
                  )
                : t(
                    'folderNotSelected'
                  )
            }

          </span>

        </div>

      </div>

      <div
        class="local-library-actions">

        <button
          type="button"
          class="btn btn-primary"
          onclick="
            chooseBooksFolder()
          ">

          📁

          ${
            state.localFolderName
              ? t(
                  'changeFolder'
                )
              : t(
                  'chooseFolder'
                )
          }

        </button>

        ${
          state.localFolderName
            ? `

              <button
                type="button"
                class="btn btn-secondary"
                onclick="
                  refreshBooks()
                ">

                ↻

                ${t(
                  'refreshDocuments'
                )}

              </button>

            `
            : ''
        }

      </div>

    </div>

  `;

}


/* =========================================================
   DOCUMENTS QUICK SUMMARY
   ========================================================= */

function documentsQuickSummary() {

  const stats =
    getDashboardStats();

  return `

    <div
      class="dashboard-grid"
      style="
        margin-bottom:13px
      ">

      ${statCard(
        t('totalDocuments'),
        stats.total,
        '▤'
      )}

      ${statCard(
        t('categoriesCount'),
        stats.categories,
        '▦'
      )}

      ${statCard(
        t('reviewCount'),
        stats.review,
        '✓'
      )}

      ${statCard(
        t('expiredDocuments'),
        stats.expired,
        '!'
      )}

    </div>

  `;

}


/* =========================================================
   BOOK COMPATIBILITY
   ========================================================= */

function openBook(
  index
) {

  const document =
    BOOKS[
      index
    ];

  if (
    !document ||
    !document.pdf
  ) {

    return;

  }

  state.documentId =
    document.id;

  state.sourceDocumentId =
    document.id;

  addRecentDocument(
    document
  );

  openPdf(
    document.pdf
  );

}


/* =========================================================
   DOCUMENT SEARCH FROM TOP BAR
   ========================================================= */

function executeGlobalSearch() {

  if (
    state.query.trim()
  ) {

    go('search');

  } else {

    go('documents');

  }

}


/* =========================================================
   SET ACTIVE DOCUMENT
   ========================================================= */

function setActiveDocument(
  documentId
) {

  const document =
    getDocumentById(
      documentId
    );

  if (!document) {
    return;
  }

  state.documentId =
    document.id;

  state.sourceDocumentId =
    document.id;

  save();

}


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

function clearSearch() {

  state.query =
    '';

  state.searchStatus =
    'all';

  state.searchCategory =
    'all';

  state.searchDepartment =
    'all';

  state.searchFolder =
    'all';

  state.searchDateFrom =
    '';

  state.searchDateTo =
    '';

  state.searchSort =
    'relevance';

  save();

  render();

}


/* =========================================================
   RENDER
   ========================================================= */

function render() {

  const root =
    document.getElementById(
      'app'
    );

  if (!root) {
    return;
  }

  ensureMetadataForDocuments();

  let html =
    '';

  if (
    state.screen ===
    'dashboard'
  ) {

    html =
      dashboard();

  }

  else if (
    state.screen ===
    'documents'
  ) {

    html =
      documents();

  }

  else if (
    state.screen ===
    'search'
  ) {

    html =
      search();

  }

  else if (
    state.screen ===
    'categories'
  ) {

    html =
      categories();

  }

  else if (
    state.screen ===
    'recent'
  ) {

    html =
      recent();

  }

  else if (
    state.screen ===
    'favorites'
  ) {

    html =
      favorites();

  }

  else if (
    state.screen ===
    'review'
  ) {

    html =
      review();

  }

  else if (
    state.screen ===
    'archive'
  ) {

    html =
      archive();

  }

  else if (
    state.screen ===
    'ai'
  ) {

    html =
      ai();

  }

  else if (
    state.screen ===
    'saved'
  ) {

    html =
      saved();

  }

  else if (
    state.screen ===
    'settings'
  ) {

    html =
      settings();

  }

  else if (
    state.screen ===
    'document'
  ) {

    html =
      documentDetails();

  }

  else if (
    state.screen ===
    'result'
  ) {

    html =
      result();

  }

  else {

    html =
      dashboard();

  }

  root.innerHTML =
    html;

}


/* =========================================================
   GLOBAL FUNCTION EXPORTS
   ========================================================= */

window.go =
  go;

window.render =
  render;

window.save =
  save;

window.toast =
  toast;

window.setLanguage =
  setLanguage;

window.chooseBooksFolder =
  chooseBooksFolder;

window.refreshBooks =
  refreshBooks;

window.restoreLocalBooksFolder =
  restoreLocalBooksFolder;

window.openPdf =
  openPdf;

window.openBook =
  openBook;

window.openDocument =
  openDocument;

window.openDocumentDetails =
  openDocumentDetails;

window.openSearchResult =
  openSearchResult;

window.executeGlobalSearch =
  executeGlobalSearch;

window.clearSearch =
  clearSearch;

window.setSearchQuery =
  setSearchQuery;

window.setSearchSort =
  setSearchSort;

window.setSearchFilter =
  setSearchFilter;

window.clearFilters =
  clearFilters;

window.toggleFavorite =
  toggleFavorite;

window.toggleDocumentSelection =
  toggleDocumentSelection;

window.toggleAllDocuments =
  toggleAllDocuments;

window.clearDocumentSelection =
  clearDocumentSelection;

window.toggleAiDocument =
  toggleAiDocument;

window.toggleAllAiDocuments =
  toggleAllAiDocuments;

window.openCategory =
  openCategory;

window.clearActiveCategory =
  clearActiveCategory;

window.updateDocumentStatus =
  updateDocumentStatus;

window.restoreDocument =
  restoreDocument;

window.saveDocumentMetadata =
  saveDocumentMetadata;

window.startAiForDocument =
  startAiForDocument;

window.startAiAction =
  startAiAction;

window.setAiMode =
  setAiMode;

window.runAiQuickAction =
  runAiQuickAction;

window.setAssistantPrompt =
  setAssistantPrompt;

window.setBriefTopic =
  setBriefTopic;

window.setBriefLength =
  setBriefLength;

window.setArticleTopic =
  setArticleTopic;

window.setAskPrompt =
  setAskPrompt;

window.generateAssistant =
  generateAssistant;

window.generateBrief =
  generateBrief;

window.generateArticle =
  generateArticle;

window.generateAsk =
  generateAsk;

window.openSavedWork =
  openSavedWork;

window.removeSavedWork =
  removeSavedWork;

window.downloadSavedWork =
  downloadSavedWork;

window.downloadCurrentAiResult =
  downloadCurrentAiResult;

window.openSourcePassage =
  openSourcePassage;


/* =========================================================
   STARTUP
   ========================================================= */

render();

restoreLocalBooksFolder();


/* =========================================================
   AFTER LOCAL FOLDER RESTORE
   ========================================================= */

window.addEventListener(
  'load',
  () => {

    if (
      BOOKS.length
    ) {

      ensureMetadataForDocuments();

    }

  }
);


/* =========================================================
   VISIBILITY REFRESH
   ========================================================= */

document.addEventListener(
  'visibilitychange',
  () => {

    if (
      !document.hidden &&
      LOCAL_BOOKS_DIRECTORY_HANDLE
    ) {

      /*
       * Ne osvežujemo samodejno pri vsakem prihodu
       * na stran, ker bi s tem po nepotrebnem
       * ponovno brali lokalni imenik.
       */

    }

  }
);
