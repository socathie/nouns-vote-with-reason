import { Proposal } from '../lib/services/subgraph.service';
import {
  MobileForAgainstToggle,
  VoteType,
} from '../components/MobileForAgainstToggle';
import { VoteList } from '../components/VoteList';
import { useVotesForProposal } from '../hooks/useVotesForProposal';
import { clsx as classNames } from 'clsx';
import { useState } from 'react';

interface SelectedProposalVoteViewProps {
  selectedProposal: Proposal | null;
}

export function SelectedProposalVoteView({
  selectedProposal,
}: SelectedProposalVoteViewProps) {
  const [voteType, setVoteType] = useState<VoteType>('for');
  const { forVotes = [], againstVotes = [] } = useVotesForProposal(
    selectedProposal.id
  );

  if (!forVotes || !againstVotes) {
    return <div>Loading...</div>;
  }

  console.log({ voteType });

  return (
    <>
      <MobileForAgainstToggle
        setMobileVoteType={setVoteType}
        mobileVoteType={voteType}
      />
      <div className="w-full grid gap-4 px-4 md:grid-cols-2 sm:grid-cols-1">
        <div
          className={classNames([
            'md:block',
            voteType === 'for' ? 'block' : 'hidden',
          ])}
        >
          <h2 className="md:block hidden text-white text-xl mb-4 font-bold uppercase">
            <span className="text-green-400">For</span>
          </h2>
          <VoteList votes={forVotes} />
        </div>
        <div
          className={classNames([
            'md:block',
            voteType === 'against' ? 'block' : 'hidden',
          ])}
        >
          <h2 className="md:block hidden text-white text-xl mb-4 font-bold uppercase">
            <span className="text-red-400">Against</span>
          </h2>
          <VoteList votes={againstVotes} />
        </div>
      </div>
      {/*<div*/}
      {/*  className={`w-full ${selectedProposal && 'md:hidden'} ${*/}
      {/*    mobileVoteType === 'for' ? 'block' : 'hidden'*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  <VoteList votes={forVotes} />*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className={`w-full ${selectedProposal && 'md:hidden'} ${*/}
      {/*    mobileVoteType === 'against' ? 'block' : 'hidden'*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  <VoteList votes={againstVotes} />*/}
      {/*</div>*/}
      {/*<div className="for-column  m-4 flex-1">*/}
      {/*  <h2 className="text-white text-xl mb-4 font-bold">*/}
      {/*    <span className="text-green-400">FOR</span>*/}
      {/*  </h2>*/}
      {/*  <VoteList votes={forVotes} />*/}
      {/*</div>*/}
      {/*<div className="for-column m-4 flex-1">*/}
      {/*  <h2 className="text-white text-xl mb-4 font-bold">*/}
      {/*    <span className="text-red-400">AGAINST</span>*/}
      {/*  </h2>*/}
      {/*  <VoteList votes={againstVotes} />*/}
      {/*</div>*/}
    </>
  );
}
