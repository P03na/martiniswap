import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Sharknado Coin (SHARKO)',
  description:
    'Built for the Starsharks community from the community. Hold SHARKO tokens to earn $SEA, win Sharks NFT & more...',
  image:
    'https://raw.githubusercontent.com/SharknadoCoin/sharknado-brand/main/icon/new/0x7E1d65ee360335Fa119EE4B9708e47700EFBFc58.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MartiniSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MartiniSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MartiniSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MartiniSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MartiniSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MartiniSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MartiniSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MartiniSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MartiniSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MartiniSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MartiniSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MartiniSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MartiniSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MartiniSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MartiniSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MartiniSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MartiniSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MartiniSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Sharknado Info & Analytics')}`,
        description: 'View statistics for Sharknado exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Sharknado Info & Analytics')}`,
        description: 'View statistics for Sharknado exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Sharknado Info & Analytics')}`,
        description: 'View statistics for Sharknado exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Sharknado')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Sharknado')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Sharknado')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Sharknado')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Sharknado')}`,
      }
    default:
      return null
  }
}
